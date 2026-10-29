import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  FileText,
  Search,
  Workflow,
  RefreshCw,
  Sliders,
  Activity,
  Building2,
  Globe,
  Shield,
  FileSpreadsheet,
  Users,
  Radio,
  BookOpen,
  Clock,
  Compass,
  FileCheck2,
  Network,
  Server,
  AlertTriangle,
  LifeBuoy,
  Zap,
  CheckSquare,
  ClipboardCheck,
  MessageSquare,
  Sparkles,
  PhoneCall,
  GitBranch,
  Target,
  FileCheck,
  Maximize2,
  X
} from 'lucide-react';

interface ChildPageProps {
  onOpenContact?: (topic?: string) => void;
}

export const BusinessContinuityPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [activeMethodologyStage, setActiveMethodologyStage] = useState<number>(0);
  const [activeDeliverable, setActiveDeliverable] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Business Continuity – Keep Critical Operations Moving | KNOOVIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = (topic?: string) => {
    if (onOpenContact) {
      onOpenContact(topic || 'Business Continuity');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 4: Methodology Stages Data
  const methodologyStages = [
    {
      step: '01',
      title: 'Assess Business Impact',
      tagline: 'Quantify operational dependencies and disruption tolerances.',
      icon: ClipboardCheck,
      description:
        'Identify vital business functions, map critical technology and workforce dependencies, and quantify potential operational and financial impacts to establish realistic recovery objectives.',
      deliverable: 'Business Impact Assessment (BIA) & Tiering Matrix'
    },
    {
      step: '02',
      title: 'Define Continuity Strategies',
      tagline: 'Formulate practical alternative operating models.',
      icon: Compass,
      description:
        'Develop viable workaround pathways, evaluate alternate operating facilities, establish emergency workload shifts, and formulate prioritized continuity strategies for each critical business function.',
      deliverable: 'Operational Strategy & Alternative Working Blueprint'
    },
    {
      step: '03',
      title: 'Prepare Response Plans',
      tagline: 'Author actionable, role-specific continuity runbooks.',
      icon: FileText,
      description:
        'Create concise, modular continuity procedures that define clear decision rights, escalation triggers, crisis communication matrices, and step-by-step instructions for designated operational leads.',
      deliverable: 'Business Continuity Plans & Crisis Escalation Playbooks'
    },
    {
      step: '04',
      title: 'Test Continuity Procedures',
      tagline: 'Validate readiness through structured simulations.',
      icon: CheckCircle2,
      description:
        'Conduct realistic tabletop exercises and scenario simulations to evaluate team responsiveness, test contact trees, challenge procedural assumptions, and identify operational gaps before real disruptions occur.',
      deliverable: 'Exercise Findings & Gap Analysis Report'
    },
    {
      step: '05',
      title: 'Review and Improve',
      tagline: 'Adapt continuity assets as organizational needs evolve.',
      icon: RefreshCw,
      description:
        'Maintain continuity plans alongside organizational transitions, new cloud architectures, modified supplier partnerships, and business workflow revisions through continuous review cycles.',
      deliverable: 'Continuous Resilience Improvement Roadmap'
    }
  ];

  // Section 6: Deliverables Data
  const deliverables = [
    {
      id: 'bia',
      title: 'Business Impact Assessment (BIA)',
      subtitle: 'Defines operational criticality & maximum allowable outages',
      description:
        'A comprehensive evaluation that catalogs critical business operations, identifies internal and external dependencies, quantifies the operational and financial impact of disruptions over time, and establishes defensible Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).',
      icon: FileSpreadsheet,
      badge: 'FOUNDATIONAL ASSESSMENT',
      components: [
        'Critical business process inventory & hierarchy',
        'Financial & regulatory impact modeling per hour/day of downtime',
        'Technology, workforce, supplier & facility dependency mapping',
        'Agreed RTO and RPO targets signed off by business owners'
      ]
    },
    {
      id: 'bcp',
      title: 'Business Continuity Plan (BCP)',
      subtitle: 'Actionable runbooks for operating during disruptions',
      description:
        'Modular, role-specific operational guidance defining immediate response actions, alternate operating procedures, manual workarounds, and resource reallocation strategies when normal systems or facilities are unavailable.',
      icon: BookOpen,
      badge: 'OPERATIONAL RUNBOOK',
      components: [
        'Immediate action checklists for department coordinators',
        'Alternate facility and remote work orchestration procedures',
        'Manual business process workarounds & transaction capture',
        'Service resumption and operational reconciliation steps'
      ]
    },
    {
      id: 'cdr',
      title: 'Critical Dependency Register',
      subtitle: 'Multi-tier mapping of systems, suppliers & workforce',
      description:
        'An auditable register that documents the precise interdependencies connecting business functions to internal applications, multi-cloud platforms, physical facilities, third-party service vendors, and essential subject matter personnel.',
      icon: Layers,
      badge: 'DEPENDENCY GOVERNANCE',
      components: [
        'Cross-service mapping between business units and IT systems',
        'SaaS platform and supplier single-points-of-failure (SPOF) register',
        'Critical personnel key-person risk & backup designations',
        'Alternate provider arrangements and contractual resilience SLAs'
      ]
    },
    {
      id: 'crisis-comm',
      title: 'Crisis Communication & Escalation Procedures',
      subtitle: 'Unified command structure and messaging protocols',
      description:
        'Pre-approved incident notification trees, decision-making authority matrices, and multi-channel stakeholder communication plans that keep executives, operational teams, employees, customers, and regulators aligned during critical events.',
      icon: MessageSquare,
      badge: 'RESPONSE PROTOCOL',
      components: [
        'Tiered escalation triggers based on disruption severity',
        'Executive Incident Command hierarchy and decision authority',
        'Pre-drafted notification templates for internal and external stakeholders',
        'Redundant communication channels (out-of-band notification trees)'
      ]
    },
    {
      id: 'exercise-findings',
      title: 'Continuity Exercise & Validation Findings',
      subtitle: 'Evidence-based readiness reports and gap identification',
      description:
        'Objective post-exercise documentation summarizing the execution of tabletop drills and operational simulations. Details observed team performance, procedural bottlenecks, contact directory accuracy, and verified recovery capabilities.',
      icon: FileCheck2,
      badge: 'VALIDATION REPORT',
      components: [
        'Scenario drill execution logs and timeline tracking',
        'Observed strengths and procedural friction points',
        'Evaluation of communication velocity and command clarity',
        'Prioritized gap catalog with assigned remediation owners'
      ]
    },
    {
      id: 'improvement-roadmap',
      title: 'Continuity Improvement Roadmap',
      subtitle: 'Governance calendar and continuous resilience actions',
      description:
        'A structured multi-quarter roadmap that translates simulation findings, audit observations, and evolving organizational dependencies into prioritized corrective actions, governance milestones, and future exercise schedules.',
      icon: Sliders,
      badge: 'STRATEGIC ROADMAP',
      components: [
        'Ranked corrective action items with target resolution dates',
        'Annual continuity review and plan re-certification schedule',
        'Supplier resilience auditing and contractual update program',
        'Multi-year exercise program covering expanding threat scenarios'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050B17] text-slate-800 dark:text-slate-100 transition-colors selection:bg-[#00A3E0]/20 selection:text-[#00A3E0]">
      {/* =========================================================================
          SECTION 1: HERO SECTION (Panoramic Full-Screen Cinematic Hero)
          ========================================================================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#030712] border-b border-white/10 pt-28 pb-16 sm:pt-32 sm:pb-20">

        {/* 100% Full-Bleed Panoramic Background Image — Spans Corner to Corner */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/cloud/business_continuity_hero_wide.jpg"
            alt="Enterprise Operational Resilience Command Center and Continuity Operations"
            className="w-full h-full object-cover object-[75%_center] filter brightness-[1.06] contrast-[1.05]"
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
              <span>ENTERPRISE OPERATIONAL RESILIENCE</span>
            </div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-3">
              <span className="block text-sm sm:text-base font-semibold uppercase tracking-wider text-[#00A3E0]">
                Business Continuity
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
                Keep Critical Business Operations Moving
              </h1>
              <p className="text-lg sm:text-xl font-bold text-cyan-300 tracking-tight drop-shadow-md">
                Anticipate Disruption. Sustain Operations. Safeguard Enterprise Value.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow">
              Build resilience into your business with continuity strategies that help essential services remain available during unexpected disruptions. Knooviq helps organizations prepare for operational challenges, coordinate response activities, and develop practical plans for maintaining critical business functions.
            </p>




          </div>
        </div>
      </section>

      {/* BC Signals Ribbon directly below hero */}
      <div className="bg-[#050B17] border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 block text-xs">
                Process Impact
              </span>
              <div className="text-sm font-bold text-white mt-1">Recovery Priority Analysis</div>
              <div className="text-xs text-slate-400 mt-0.5">Critical Service Mapping</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 block text-xs">
                Role Runbooks
              </span>
              <div className="text-sm font-bold text-white mt-1">Operational Guidance</div>
              <div className="text-xs text-slate-400 mt-0.5">Actionable Step-by-Step Plans</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
              <span className="font-bold uppercase tracking-wider text-cyan-400 block text-xs">
                Drill Validation
              </span>
              <div className="text-sm font-bold text-white mt-1">Crisis Simulations</div>
              <div className="text-xs text-slate-400 mt-0.5">Tested Protocol Readiness</div>
            </div>
          </div>
        </div>
      </div>



      {/* =========================================================================
          SECTION 2: SIX CAPABILITY SECTIONS (WITH UNIQUE IMAGES)
          ========================================================================= */}
      <section id="capabilities" className="py-20 lg:py-24 space-y-24 bg-white dark:bg-[#050B17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* -----------------------------------------------------------------
              CAPABILITY 1: Business Impact Analysis (Image 2)
              Layout: Text Left, Image Right
              ----------------------------------------------------------------- */}
          <div id="bia-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Search className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CAPABILITY 01 &bull; OPERATIONAL ASSESSMENT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Business Impact Analysis
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Understand which business functions must remain available and how disruptions could affect operations. Knooviq helps identify critical processes, dependencies, essential resources, and operational priorities so organizations can make informed continuity decisions.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Through structured interviews, data gathering, and dependency modeling, we assess both financial and non-financial impacts over time. This enables business units to establish defensible Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) aligned with regulatory requirements, contractual commitments, and operational tolerances.
              </p>

              {/* Practical Activities List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                  Key Focus Areas &amp; Practical Activities:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Critical business function identification:</strong> Catalog essential revenue-generating, customer-serving, and compliance processes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Process and resource dependency mapping:</strong> Trace cross-departmental handoffs, data feeds, internal personnel, and IT systems.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Disruption impact assessment:</strong> Quantify financial losses, legal liabilities, customer attrition, and reputational risk over time.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Operational priority definition:</strong> Establish clear tiering that dictates which services receive immediate restoration attention.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Business recovery requirements:</strong> Define concrete minimum operating levels, staffing thresholds, and recovery time limits.</span>
                  </li>
                </ul>
              </div>

              {/* Business Value Highlight Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border-l-4 border-[#00A3E0] text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Business Value:</span>
                Provides leadership with objective, evidence-based prioritization criteria, preventing over-investment in non-critical systems while safeguarding revenue-generating operations.
              </div>
            </div>

            {/* Right Image (Image 2) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-slate-900 group aspect-[16/10]">
                <img
                  src="/images/business-impact-analysis.webp"
                  alt="Corporate workshop where business analysts review printed process maps and business impact assessment documents"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-bold block text-sm">Collaborative Business Impact Assessment Workshop</span>
                  <span className="text-slate-300 text-[11px]">Process mapping &bull; Tolerance thresholds &bull; Dependency documentation</span>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              CAPABILITY 2: Continuity Strategy & Planning (Image 3)
              Layout: Image Left, Text Right (Alternating)
              ----------------------------------------------------------------- */}
          <div id="strategy-planning-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image (Image 3) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-slate-900 group aspect-[16/10]">
                <img
                  src="/images/continuity-strategy-planning.webp"
                  alt="Business continuity specialists collaborating on contingency plans and alternate operating arrangements in a meeting room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-bold block text-sm">Contingency Runbook &amp; Strategy Formulation</span>
                  <span className="text-slate-300 text-[11px]">Role-based playbooks &bull; Alternate working facilities &bull; Workaround definitions</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CAPABILITY 02 &bull; STRATEGY &amp; PROCEDURAL PLANNING</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Continuity Strategy &amp; Planning
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Develop practical continuity plans that define how essential operations will continue when normal working conditions are disrupted. Establish clear responsibilities, alternate arrangements, escalation procedures, and communication protocols.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Instead of producing dense binder documentation that sits unused during an incident, Knooviq designs practical, modular runbooks tailored to specific operational roles. We structure contingency pathways that outline concrete steps for operating without primary applications, facilities, or critical staff.
              </p>

              {/* Practical Activities List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                  Key Focus Areas &amp; Practical Activities:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Business continuity plan development:</strong> Author modular, step-by-step procedures for each operational unit.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Contingency procedures:</strong> Document manual fallback methods, offline transactional captures, and interim data synchronization.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Alternate working arrangements:</strong> Establish distributed remote access pathways, secondary site shifts, and mobile command kits.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Roles and responsibilities:</strong> Define explicit role-based assignments with secondary and tertiary delegates for key positions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Escalation and communication plans:</strong> Detail threshold-based notification trees and internal/external messaging cadences.</span>
                  </li>
                </ul>
              </div>

              {/* Business Value Highlight Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border-l-4 border-[#00A3E0] text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Business Value:</span>
                Eliminates hesitation and confusion during an operational crisis by supplying frontline managers with pre-authorized, executable action checklists.
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              CAPABILITY 3: Critical Service Continuity (Image 4)
              Layout: Text Left, Image Right
              ----------------------------------------------------------------- */}
          <div id="service-continuity-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Network className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CAPABILITY 03 &bull; SERVICE &amp; DEPENDENCY CONTINUITY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Critical Service Continuity
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Identify the relationships between business processes, enterprise applications, cloud platforms, infrastructure, suppliers, and essential services. Develop continuity measures that account for these dependencies and reduce the risk of one disruption affecting multiple operations.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Modern enterprise operations depend on multi-layered ecosystems spanning on-premises systems, hyperscaler clouds, SaaS products, payment gateways, and logistics providers. Knooviq helps organizations map these complex relationships to identify single points of failure and establish contingency mechanisms that maintain service delivery even when specific components fail.
              </p>

              {/* Practical Activities List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                  Key Focus Areas &amp; Practical Activities:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Business and technology dependency mapping:</strong> Visually trace connections across enterprise software, databases, and networks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Essential application identification:</strong> Pinpoint mission-critical systems and their architectural supporting tiers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Cloud and infrastructure continuity:</strong> Assess multi-region failover provisions, load-balancing resilience, and data replication.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Supplier and third-party dependencies:</strong> Audit vendor operational SLAs, verify vendor continuity plans, and identify alternate sources.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Alternative service arrangements:</strong> Prepare redundant processing routes, secondary communication lines, and fallback gateways.</span>
                  </li>
                </ul>
              </div>

              {/* Business Value Highlight Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border-l-4 border-[#00A3E0] text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Business Value:</span>
                Shields enterprise revenue by preventing an isolated infrastructure outage or supplier failure from creating cascading disruptions across dependent business services.
              </div>
            </div>

            {/* Right Image (Image 4) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-slate-900 group aspect-[16/10]">
                <img
                  src="/images/critical-service-continuity.webp"
                  alt="Enterprise technology operations team reviewing connected business services and infrastructure dependencies on a large display"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-bold block text-sm">Critical Service Ecosystem &amp; Dependency Analysis</span>
                  <span className="text-slate-300 text-[11px]">Cloud platforms &bull; Vendor integrations &bull; Application topology review</span>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              CAPABILITY 4: Response & Crisis Coordination (Image 5)
              Layout: Distinct Enterprise Layout (Full-width side-by-side card)
              ----------------------------------------------------------------- */}
          <div id="crisis-coordination-section" className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-slate-50 dark:bg-[#070E1E] border border-slate-200/80 dark:border-white/10 shadow-xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CAPABILITY 04 &bull; CRISIS COMMAND &amp; COORDINATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Response &amp; Crisis Coordination
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Prepare teams to respond in a coordinated manner when unexpected events interrupt normal operations. Define decision-making responsibilities, incident escalation routes, stakeholder communication, and operational response procedures.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Distinctive Visual Column (Image 5) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-xl bg-slate-900 group aspect-[16/10]">
                  <img
                    src="/images/crisis-response-coordination.webp"
                    alt="Corporate crisis-response tabletop exercise with leadership team reviewing scenario documents and decision-making responsibilities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                    <span className="font-bold block text-sm">Crisis Command Structure &amp; Tabletop Exercise</span>
                    <span className="text-slate-300 text-[11px]">Incident escalation &bull; Multi-stakeholder communications &bull; Decision rights</span>
                  </div>
                </div>
              </div>

              {/* Explanatory & Focus Areas Column */}
              <div className="lg:col-span-6 space-y-5">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  When a disruption strikes, disorganized decision-making and mixed messaging amplify operational stress. Knooviq establishes a disciplined incident command framework that provides operational leaders with clear governance guidelines, escalation triggers, and pre-scripted communications templates for all key audiences.
                </p>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Structured Command Capabilities:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/60 dark:border-white/5 flex items-start gap-3">
                      <Users className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 dark:text-white text-xs block">Crisis response roles</strong>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Designate primary Incident Commanders, operations leads, legal liaisons, and communications officers.</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/60 dark:border-white/5 flex items-start gap-3">
                      <GitBranch className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 dark:text-white text-xs block">Incident escalation procedures</strong>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Structure threshold-based escalation gates to activate executive command teams without delays.</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/60 dark:border-white/5 flex items-start gap-3">
                      <MessageSquare className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 dark:text-white text-xs block">Internal and external communication</strong>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Establish regular briefing rhythms and notification cadences for employees, executive leadership, and customers.</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200/60 dark:border-white/5 flex items-start gap-3">
                      <Building2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 dark:text-white text-xs block">Stakeholder coordination &amp; Response decision-making</strong>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Pre-define spending thresholds, legal signoffs, and partner coordination protocols to eliminate administrative friction.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-50/80 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-400/20 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-[#00A3E0] block mb-0.5">Operational Outcome:</span>
                  Ensures unified command, clear decision authority, and rapid, consistent communication that protects organizational reputation and personnel safety during major incidents.
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              CAPABILITY 5: Continuity Testing & Validation (Image 6)
              Layout: Text Left, Image Right
              ----------------------------------------------------------------- */}
          <div id="testing-validation-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CAPABILITY 05 &bull; EXERCISE &amp; VALIDATION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Continuity Testing &amp; Validation
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Validate continuity plans through structured exercises and scenario reviews. Help teams understand their responsibilities, assess whether procedures are practical, identify gaps, and improve readiness before a real disruption occurs.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                A business continuity plan is only as reliable as the testing that supports it. Knooviq conducts realistic tabletop exercises, walkthroughs, and simulation drills that place operational teams into realistic disruption scenarios without creating operational risk. We challenge assumptions, verify contact directories, and evaluate procedural handoffs.
              </p>

              {/* Practical Activities List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                  Key Focus Areas &amp; Practical Activities:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Tabletop continuity exercises:</strong> Facilitate scenario-driven discussions that step teams through simulated operational interruptions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Scenario-based testing:</strong> Validate responses across diverse events including power losses, cyber outages, vendor failures, and facility inaccessibility.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Procedure and contact-list validation:</strong> Test emergency notification lists, verify delegate availability, and confirm system credentials.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Gap identification:</strong> Uncover ambiguous instructions, missing software licenses, unmapped dependencies, and unworkable handoffs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Findings and corrective actions:</strong> Deliver documented exercise debriefs with prioritized remediation steps and clear accountability.</span>
                  </li>
                </ul>
              </div>

              {/* Business Value Highlight Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border-l-4 border-[#00A3E0] text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Business Value:</span>
                Builds genuine organizational confidence and muscle memory, ensuring response staff can execute their assignments calmly and effectively under actual disruption conditions.
              </div>
            </div>

            {/* Right Image (Image 6) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-slate-900 group aspect-[16/10]">
                <img
                  src="/images/continuity-testing-validation.webp"
                  alt="Enterprise team conducting a business continuity simulation exercise and reviewing recovery runbooks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-bold block text-sm">Simulation Exercise &amp; Runbook Validation</span>
                  <span className="text-slate-300 text-[11px]">Tabletop drills &bull; Procedure verification &bull; Remediation tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              CAPABILITY 6: Continuous Resilience Improvement (Image 7)
              Layout: Image Left, Text Right (With distinctive visual identity)
              ----------------------------------------------------------------- */}
          <div id="resilience-improvement-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-4">
            {/* Left Image (Image 7) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-slate-900 group aspect-[16/10]">
                <img
                  src="/images/resilience-improvement.webp"
                  alt="Enterprise team conducting a post-incident review and continuous resilience improvement workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B17]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-bold block text-sm">Post-Incident Review &amp; Continuous Improvement</span>
                  <span className="text-slate-300 text-[11px]">Plan maintenance &bull; Lessons learned &bull; Dependency reassessment</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <RefreshCw className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>CAPABILITY 06 &bull; ADAPTIVE RESILIENCE GOVERNANCE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Continuous Resilience Improvement
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Keep continuity arrangements aligned with changing business processes, technology environments, supplier relationships, and organizational priorities. Review lessons learned, update plans, and refine procedures as business requirements evolve.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Business continuity is an ongoing organizational discipline, not a one-time project. As enterprises adopt new SaaS applications, reconfigure cloud environments, onboard new vendors, or acquire businesses, continuity plans must evolve concurrently. Knooviq establishes governance cadences that keep resilience strategies current and actionable.
              </p>

              {/* Practical Activities List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                  Key Focus Areas &amp; Practical Activities:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Continuity plan maintenance:</strong> Conduct scheduled quarterly and annual reviews of operational procedures and contact registries.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Lessons-learned reviews:</strong> Facilitate blameless post-disruption or post-exercise debriefs to capture practical operational feedback.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Dependency reassessment:</strong> Re-evaluate system architectures and supplier connections whenever major technology changes take place.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Corrective action tracking:</strong> Manage an active remediation log with clear accountability and executive oversight.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span><strong>Ongoing resilience improvements:</strong> Benchmark arrangements against enterprise standards (such as ISO 22301) to continuously mature capabilities.</span>
                  </li>
                </ul>
              </div>

              {/* Business Value Highlight Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B1528] border-l-4 border-[#00A3E0] text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Business Value:</span>
                Protects the long-term return on your continuity investment, preventing plans from degrading into outdated compliance paperwork and ensuring permanent readiness.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CONTINUITY METHODOLOGY (TIMELINE)
          ========================================================================= */}
      <section id="methodology" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>STRUCTURED RESILIENCE FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Practical Approach to Business Continuity
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A disciplined five-stage methodology that transitions organizations from operational assessment through strategy formulation to ongoing, tested resilience.
            </p>
          </div>

          {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
          <div className="relative">
            {/* Horizontal Connecting Line on Large Screens */}
            <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-slate-200 dark:bg-white/10 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
              {methodologyStages.map((stage, idx) => {
                const IconComponent = stage.icon;
                const isActive = activeMethodologyStage === idx;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveMethodologyStage(idx)}
                    className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                      isActive
                        ? 'bg-white dark:bg-[#0B1528] border-2 border-[#00A3E0] shadow-xl ring-2 ring-[#00A3E0]/20'
                        : 'bg-white/80 dark:bg-[#0B1528]/60 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                            isActive
                              ? 'bg-[#00A3E0] text-white shadow-md shadow-cyan-500/20'
                              : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                          STAGE {stage.step}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {stage.title}
                        </h3>
                        <p className="text-xs font-medium text-[#00A3E0] leading-snug">
                          {stage.tagline}
                        </p>
                      </div>

                      {/* Explanation */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    {/* Stage Deliverable Badge */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Key Deliverable:</span>
                      <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 block">
                        {stage.deliverable}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: BUSINESS CONTINUITY VS. DISASTER RECOVERY (CLEAN SPLIT LAYOUT)
          ========================================================================= */}
      <section id="bc-vs-dr" className="py-20 lg:py-24 bg-white dark:bg-[#050B17] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ScaleIcon className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>DISCIPLINE ALIGNMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Business Continuity vs. Disaster Recovery
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              While frequently mentioned in the same breath, Business Continuity and Disaster Recovery address distinct operational domains. An effective enterprise resilience posture coordinates both disciplines.
            </p>
          </div>

          {/* Clean Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Column 1: Business Continuity */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[#00A3E0] text-xs font-bold uppercase tracking-wider">
                    OPERATIONAL RESILIENCE &amp; PEOPLE
                  </span>
                  <Building2 className="w-5 h-5 text-[#00A3E0]" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Business Continuity (BC)
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Focuses on maintaining or resuming essential business functions, coordinating people and processes, and enabling critical services to continue during disruption.
                </p>

                <div className="pt-2 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Core Dimensions:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Operational Scope:</strong> Business units, personnel safety, customer fulfillment, and critical transaction flow.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Key Actions:</strong> Alternate facility activation, manual workarounds, partner reassignment, and crisis communication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Disruption Drivers:</strong> Facility inaccessibility, supply chain delays, staff shortages, regional crises, or extreme weather.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                      <span><strong>Success Measure:</strong> Minimum service availability and customer commitment fulfillment during outage windows.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200/60 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Primary Objective:</span>
                Keep the business operating and fulfilling customer commitments regardless of what triggered the underlying challenge.
              </div>
            </div>

            {/* Column 2: Disaster Recovery */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                    TECHNICAL INFRASTRUCTURE &amp; DATA
                  </span>
                  <Server className="w-5 h-5 text-blue-500" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Disaster Recovery (DR)
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Focuses on restoring IT systems, applications, infrastructure, and data following an outage or disruptive event.
                </p>

                <div className="pt-2 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Core Dimensions:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span><strong>Technical Scope:</strong> Cloud workloads, storage volumes, database replicas, and network routing configurations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span><strong>Key Actions:</strong> Secondary region failover, backup restoration, SAN synchronization, and infrastructure rebuilds.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span><strong>Disruption Drivers:</strong> Ransomware lockouts, physical server failures, cloud availability zone blackouts, or corrupted databases.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span><strong>Success Measure:</strong> Restoring workloads within defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200/60 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Primary Objective:</span>
                Restore digital services, servers, data integrity, and network connectivity back to operational status.
              </div>

              <div className="pt-2">
                <Link
                  to="/cloud-operations/disaster-recovery"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E0] hover:underline"
                >
                  <span>Explore Dedicated Disaster Recovery Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Unified Coordination Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-500/20 text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-2">
            <div className="flex items-center gap-2 text-[#00A3E0] font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
              <span>How They Work Together</span>
            </div>
            <p>
              Disaster recovery provides the technical foundation that supports the wider business continuity strategy. When an outage occurs, disaster recovery teams work to restore servers, cloud platforms, and databases, while business continuity procedures guide staff on alternate operational methods, manual workarounds, and stakeholder updates until full recovery is verified. Both disciplines require shared prioritization, mutual awareness, and joint testing exercises.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: BUSINESS CONTINUITY DELIVERABLES (DOCUMENT-STYLE ITEMS)
          ========================================================================= */}
      <section id="deliverables" className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-400/20 text-[#00A3E0] dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>PRACTICAL DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Practical Deliverables for Business Resilience
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Structured, auditable deliverables developed during a Knooviq business continuity engagement to guide leadership and operational teams.
            </p>
          </div>

          {/* Document-Style Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activeDeliverable === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveDeliverable(isSelected ? null : idx)}
                  className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B1528] border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-5 ${
                    isSelected
                      ? 'border-[#00A3E0] shadow-xl ring-2 ring-[#00A3E0]/20'
                      : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-[#00A3E0]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#00A3E0] font-medium">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Components List */}
                    <div className="pt-2 border-t border-slate-100 dark:border-white/5 space-y-2">
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block">
                        Included Documentation Components:
                      </span>
                      <ul className="space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        {item.components.map((comp, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-[#00A3E0] font-bold mt-0.5">&bull;</span>
                            <span>{comp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-[#00A3E0] font-semibold">
                    <span>Inquire for engagement scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING CALL TO ACTION
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#050B17] border-t border-white/10 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A3E0]/10 via-transparent to-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-blue-900/30 via-cyan-950/30 to-slate-900/60 border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-sm">

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                SECURITY &amp; RESILIENCE &bull; BUSINESS CONTINUITY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Build Resilience Before Disruption Happens.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Prepare your organization to respond confidently, maintain essential services, and adapt when unexpected events challenge business operations.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => handleOpenContact('Talk to Our Experts – Business Continuity')}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E0] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to Our Cloud Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/cloud-operations/disaster-recovery"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Disaster Recovery</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

// Internal mini-helper icon to avoid any import mismatch
const ScaleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);

export default BusinessContinuityPage;
