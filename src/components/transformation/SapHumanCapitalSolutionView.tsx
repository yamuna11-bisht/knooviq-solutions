import React, { useState } from 'react';
import {
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Clock,
  Settings,
  Workflow,
  Maximize2,
  X,
  Target,
  Search,
  Activity,
  Network,
  Compass,
  FileCheck2,
  Globe2,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  TrendingUp,
  BrainCircuit,
  PieChart
} from 'lucide-react';

interface SapHumanCapitalSolutionViewProps {
  onOpenContact: (topic?: string) => void;
}

export const SapHumanCapitalSolutionView: React.FC<SapHumanCapitalSolutionViewProps> = ({ onOpenContact }) => {
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(0);
  const [activeSkillCluster, setActiveSkillCluster] = useState<number>(0);
  const [activeAiTab, setActiveAiTab] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState<boolean>(false);

  // 1. Employee Experience Lifecycle Stepper (4 Core Phases)
  const lifecyclePhases = [
    {
      id: 'attract',
      num: '01',
      phase: 'ATTRACT & HIRE',
      icon: <Search className="w-5 h-5 text-purple-400" />,
      title: 'AI Recruiting & Global Digital Onboarding',
      subtitle: 'Candidate Journey Orchestration & Skills-Based Matching',
      summary: 'Replaces passive applicant tracking with proactive, skills-driven sourcing. Candidate skills are automatically mapped to role ontologies, eliminating screening bias and accelerating offer acceptance.',
      capabilities: [
        'Career Site Builder with personalized candidate landing experiences',
        'AI resume parsing and skills-based job match score calculation',
        'Touchless digital onboarding with electronic signatures and hardware provisioning',
        'Integrated background verification and statutory I-9/Right-to-Work compliance'
      ],
      metrics: { timeToFill: '-52% Duration', applicantNps: '+48 pts', offerAccept: '91.4% Rate' }
    },
    {
      id: 'develop',
      num: '02',
      phase: 'DEVELOP & UPSKILL',
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: 'Talent Intelligence Hub & Dynamic Learning',
      subtitle: 'Continuous Upskilling & AI-Curated Career Paths',
      summary: 'Empowers employees with personalized learning recommendations powered by the SAP Talent Intelligence Hub. Ingests content from LinkedIn Learning, Coursera, and internal academies directly into career progressions.',
      capabilities: [
        'Dynamic skills taxonomy mapping employee proficiencies against organizational needs',
        'AI micro-learning modules triggered automatically during role transitions',
        'VR/AR interactive safety and equipment training simulations',
        'Automated regulatory compliance retraining and certification renewals'
      ],
      metrics: { skillGrowth: '+64% Certified', courseCompletion: '88% Engagement', internalPromote: '42% of Hires' }
    },
    {
      id: 'engage',
      num: '03',
      phase: 'ENGAGE & PERFORM',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: 'Continuous Performance & Sentiment Sentinel',
      subtitle: 'Real-Time Goal Alignment & Merit-Based Rewards',
      summary: 'Replaces once-a-year traumatic appraisals with continuous 1-on-1 feedback, agile quarterly OKRs, and real-time sentiment analytics to detect burnout and disengagement before attrition occurs.',
      capabilities: [
        'Agile OKRCascades connecting line-of-business deliverables to enterprise strategy',
        'Continuous 360-degree peer feedback with sentiment analysis',
        'Merit matrix automation calculating performance-based bonuses and stock grants',
        'Pulse check surveys measuring employee Net Promoter Score in real time'
      ],
      metrics: { goalAlignment: '96% OKR Visibility', turnoverRisk: '-38% Flight Rate', managerFeedback: 'Weekly Cadence' }
    },
    {
      id: 'advance',
      num: '04',
      phase: 'ADVANCE & MOBILIZE',
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      title: 'Opportunity Marketplace & Total Workforce',
      subtitle: 'Internal Gigs, Succession Planning & Fieldglass Mesh',
      summary: 'Democratizes internal talent mobility. Employees apply for cross-functional project gigs, while leadership maintains real-time succession pipelines across permanent staff (Employee Central) and contingent labor (Fieldglass).',
      capabilities: [
        'Internal gig matching connecting employees with high-impact short-term sprints',
        '9-box succession matrix with predictive leadership bench strength indicators',
        'Total Workforce integration linking SAP Fieldglass contractors and contingent workers',
        'Offboarding automation with institutional knowledge transfer and alumni networks'
      ],
      metrics: { gigAdoption: '3,400+ Gigs/Year', benchStrength: '3.1 Ready Successors', retentionLift: '+38% Retention' }
    }
  ];

  // 2. Interactive Skills Ontology & Career Mobility Matrix
  const skillClusters = [
    {
      role: 'Cloud Enterprise Solution Architect',
      currentProficiency: '88% Match',
      verifiedSkills: ['Clean Core ABAP', 'SAP BTP Event Mesh', 'S/4HANA Private Cloud', 'Hyperscaler DR'],
      emergingAdjacentSkills: ['GenAI Joule Extensions', 'ESG Green Ledger Architecture', 'Multi-Cloud FinOps'],
      recommendedGig: 'Project Titan: Lead Global cFin Clean Core Decoupling (3-Month Gig)',
      growthTrajectory: 'Principal Enterprise Fellow (+24% Compensation Band)'
    },
    {
      role: 'Supply Chain Data Scientist',
      currentProficiency: '92% Match',
      verifiedSkills: ['SAP IBP Demand Sensing', 'Python SCM Analytics', 'Multi-Echelon Optimization', 'SQL Data Lake'],
      emergingAdjacentSkills: ['Vision AI Yard Gate OCR', 'Autonomous Mobile Robotics (AMR)', 'Scope 3 Carbon Modeling'],
      recommendedGig: 'Sprint Atlas: Deploy Computer Vision Fleet Gate at Distribution Center 4 (6-Week Gig)',
      growthTrajectory: 'Director of Autonomous Logistics (+28% Compensation Band)'
    },
    {
      role: 'Corporate FP&A Controller',
      currentProficiency: '90% Match',
      verifiedSkills: ['Universal Journal ACDOCA', 'SAP Analytics Cloud', 'Multi-GAAP Consolidation', 'PaPM Costing'],
      emergingAdjacentSkills: ['AI Dispute Auto-Reconciliation', 'Continuous Soft Close Automation', 'ZATCA Phase 2 DRC'],
      recommendedGig: 'Transformation Pulse: Standardize Group Consolidation across 14 Entities (4-Month Gig)',
      growthTrajectory: 'Regional VP of Financial Planning (+30% Compensation Band)'
    }
  ];

  // 3. AI Agents in Human Experience Spotlight
  const aiHcmAgents = [
    {
      id: 'career-agent',
      name: 'AI Career Path & Mentorship Agent',
      role: 'Autonomous Career Navigator',
      desc: 'Correlates an employee’s historical project performance, skill ratings, and stated aspirations to match them with verified mentors and relevant internal gig assignments across business units.',
      stat: '3.4x Faster Promotion Velocity'
    },
    {
      id: 'equity-agent',
      name: 'Intelligent Compensation & Pay Parity Agent',
      role: 'Continuous Pay Equity & Market Benchmark Sentinel',
      desc: 'Continuously monitors compensation bands against market indices and flags demographic, gender, or regional pay discrepancies before annual salary reviews take place.',
      stat: '100% Equal Pay Compliance'
    },
    {
      id: 'burnout-agent',
      name: 'Employee Sentiment & Flight Risk Sentinel',
      role: 'Burnout Early Warning & Retention Diagnostics',
      desc: 'Analyzes anonymized pulse survey trends, calendar meeting overload, and team velocity metrics to alert HR business partners to potential burnout hotspots before resignation letters are submitted.',
      stat: '-38% Unplanned Attrition'
    }
  ];

  // 4. Case Studies
  const caseStudies = [
    {
      client: 'Global Technology & Engineering Services Leader',
      scale: '65,000 Employees across 34 Countries',
      challenge: 'Fragmented legacy HR systems causing 45-day hiring cycles and high turnover among critical cloud software engineers.',
      solution: 'Implemented SAP SuccessFactors HXM Suite, Talent Intelligence Hub, and SAP Fieldglass Total Workforce Management.',
      outcomes: [
        '52% reduction in time-to-fill for critical technical roles',
        '99.94% global payroll calculation accuracy across 34 currencies',
        '+38% increase in internal lateral talent mobility'
      ]
    },
    {
      client: 'Multi-Hospital Healthcare Network',
      scale: '28,000 Healthcare Professionals & Clinical Staff',
      challenge: 'Manual shift scheduling, unmonitored overtime burnout, and cumbersome clinical credential re-certification.',
      solution: 'Deployed SuccessFactors Employee Central, Opportunity Marketplace for shift bidding, and continuous sentiment tracking.',
      outcomes: [
        'Zero regulatory compliance lapses in clinical credentials',
        '42-point improvement in clinical staff satisfaction (eNPS)',
        '18% reduction in expensive third-party agency nurse spending'
      ]
    }
  ];

  // 5. FAQs
  const hcmFaqs = [
    {
      q: 'What is the SAP Talent Intelligence Hub and how does it manage organizational skills?',
      a: 'The Talent Intelligence Hub is a centralized skills ontology and machine learning engine within SAP SuccessFactors. It creates an evolving dynamic skills graph for every employee, inferring proficiencies from completed projects, peer feedback, and external certifications. It connects skills to recruiting, learning, and succession planning.'
    },
    {
      q: 'How does SAP SuccessFactors ensure compliance with localized payroll and labor laws across 50+ countries?',
      a: 'SAP SuccessFactors Employee Central Payroll delivers pre-configured, certified statutory localization packages for over 50 countries. Tax brackets, social security deductions, localized holiday calendars, and mandatory regulatory filings are updated continuously by SAP product engineering teams without requiring custom code.'
    },
    {
      q: 'Can SAP SuccessFactors integrate with contingent labor and contractor platforms?',
      a: 'Yes. Through native integration with SAP Fieldglass, organizations achieve Total Workforce Management. Permanent full-time employees, independent contractors, and statement-of-work (SOW) agency personnel are visible in a single organizational hierarchy, optimizing total talent spend and compliance.'
    },
    {
      q: 'How does the Opportunity Marketplace facilitate internal mobility?',
      a: 'The Opportunity Marketplace functions as an internal talent clearinghouse. Business units post short-term project gigs, innovation challenges, and mentoring roles. Employees receive AI-recommended opportunities matched to their personal development goals and available bandwidth, fostering organizational agility.'
    }
  ];

  const currentLifecycle = lifecyclePhases[activeLifecycleStage];
  const currentCluster = skillClusters[activeSkillCluster];

  return (
    <div className="w-full pb-20">

      {/* =========================================================================
          1. FULL-SCREEN CINEMATIC HERO SECTION (Full-Bleed 3D Visual & Enterprise Content Overlay)
          ========================================================================= */}
      <section className="relative w-full h-[540px] sm:h-[560px] lg:h-[580px] flex items-center overflow-hidden bg-[#030914] text-white border-b border-slate-200/20 dark:border-white/10 shadow-2xl py-6 sm:py-8 lg:py-8">
        
        {/* Full-Bleed Enterprise 3D Background Image */}
        <div 
          className="absolute inset-0 z-0 group/hero cursor-pointer"
          onClick={() => setIsFullscreenImageOpen(true)}
          title="Click to view full screen 3D visual"
        >
          <img 
            src="/images/sap_app_humancapital_3d.jpg" 
            alt="SAP SuccessFactors Talent Intelligence Hub" 
            className="w-full h-full object-cover object-center lg:object-[66%_center] transition-transform duration-1000 ease-out group-hover/hero:scale-102"
          />
          
          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/90 via-[#0D0924]/75 sm:via-[#0D0924]/50 lg:via-[#0D0924]/30 to-[#030914]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-[#030914]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/60 via-transparent to-transparent pointer-events-none" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

          {/* Click to expand pill */}
          <div className="absolute bottom-4 right-5 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono text-purple-300 hover:bg-black/70 hover:text-white transition-all shadow-xl">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click to View Full Screen Visual</span>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-purple-400/30 text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 shadow-xl">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>SAP SUCCESSFACTORS HXM SUITE</span>
              </div>
              <span className="text-slate-400 text-xs font-mono hidden sm:inline">/</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider bg-black/30 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm shadow-md">
                <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                <span>TALENT INTELLIGENCE HUB</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Intelligent People Management, Dynamic Skills Ontology & Global Payroll
            </h1>

            {/* Narrative */}
            <p className="text-xs sm:text-sm lg:text-[14px] font-medium text-slate-200 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-2xl">
              Elevate employee experiences from hire to retire. Unify core HR, dynamic skills ontologies, internal gig marketplaces, and automated multi-country payroll on SAP SuccessFactors and SAP Fieldglass.
            </p>

            {/* Architectural Checkpoints */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
                <span>Talent Intelligence Hub</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>Opportunity Marketplace</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Employee Central Core</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/15 text-[11px] font-medium text-slate-200 shadow-lg">
                <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                <span>50-Country Global Payroll</span>
              </span>
            </div>

            {/* Strategic Content Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    Dynamic AI Skills Graph
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Continuous machine learning matching employee verified proficiencies with critical organizational skill deficits.
                </p>
              </div>

              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10.5px] font-mono font-bold uppercase text-white">
                    Total Workforce Orchestration
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-normal">
                  Unified governance combining full-time payroll with SAP Fieldglass contingent labor and statement-of-work teams.
                </p>
              </div>
            </div>



            {/* KPI Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-purple-300 uppercase font-bold tracking-wider">Talent Retention</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">+38%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Flight Risk Lean</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-purple-300 uppercase font-bold tracking-wider">Time to Fill</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">-52%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Critical Roles</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-purple-300 uppercase font-bold tracking-wider">Payroll Acc.</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 leading-none">99.9%</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">50+ Jurisdictions</p>
              </div>
              <div className="px-3 py-2 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                <p className="text-[9px] text-purple-300 uppercase font-bold tracking-wider">Employee NPS</p>
                <p className="text-base sm:text-lg font-black text-emerald-400 mt-0.5 leading-none">+42 pts</p>
                <p className="text-[8.5px] text-slate-400 mt-0.5">Satisfaction Index</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
              src="/images/sap_app_humancapital_3d.jpg" 
              alt="SAP SuccessFactors Talent Intelligence Hub" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono font-bold text-purple-300 backdrop-blur-md shadow-xl">
                SAP SuccessFactors // Talent Intelligence Hub & Skills Graph (3D)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">

        {/* =========================================================================
            2. EMPLOYEE EXPERIENCE LIFECYCLE STEPPER (4 Core Phases)
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-purple-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-500">
                HUMAN EXPERIENCE MANAGEMENT • HIRE-TO-RETIRE JOURNEY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Four Stages of the Intelligent Workforce Lifecycle
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
              SAP SuccessFactors delivers an engaging, personalized journey across every milestone of the employee experience.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
            {lifecyclePhases.map((phase, idx) => {
              const isActive = activeLifecycleStage === idx;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActiveLifecycleStage(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-purple-500/15 border-purple-500 shadow-md shadow-purple-500/10'
                      : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-purple-400' : 'text-slate-400'}`}>
                      PHASE 0{idx + 1}
                    </span>
                    {phase.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    {phase.phase}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Lifecycle Inspection Console */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-purple-50/20 to-slate-50 dark:from-[#0B0A21] dark:via-[#070617] dark:to-[#030914] border border-slate-200 dark:border-purple-500/20 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-purple-500 uppercase tracking-wider block mb-1">
                  PHASE 0{activeLifecycleStage + 1} // {currentLifecycle.phase} SPECIFICATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {currentLifecycle.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                  {currentLifecycle.subtitle}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentLifecycle.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentLifecycle.capabilities.map((cap, cIdx) => (
                <div key={cIdx} className="p-3.5 rounded-2xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {/* Benchmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-white/10 font-mono">
              {Object.entries(currentLifecycle.metrics).map(([k, v], idx) => (
                <div key={idx} className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
                  <span className="text-xs text-slate-400 capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-300">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. INTERACTIVE SKILLS ONTOLOGY & CAREER MOBILITY MATRIX
            ========================================================================= */}
        <section className="bg-gradient-to-br from-[#0B0A21] via-[#0D0A2C] to-[#040C1A] rounded-3xl border border-purple-500/20 p-8 sm:p-12 shadow-2xl text-white space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-purple-300 bg-purple-500/15 border border-purple-500/30 mb-2">
              <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
              <span>DYNAMIC SKILLS ONTOLOGY • OPPORTUNITY MARKETPLACE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Interactive Talent Intelligence Hub & Career Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Explore how AI connects verified employee capabilities with adjacent emerging competencies and real internal project gigs.
            </p>
          </div>

          {/* Role Cluster Selector */}
          <div className="flex flex-wrap gap-2.5">
            {skillClusters.map((cluster, idx) => {
              const isActive = activeSkillCluster === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSkillCluster(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{cluster.role}</span>
                </button>
              );
            })}
          </div>

          {/* Cluster Details Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-black text-white">{currentCluster.role}</h3>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                {currentCluster.currentProficiency}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase text-cyan-300 block mb-2">Verified Enterprise Proficiencies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCluster.verifiedSkills.map((s, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase text-purple-300 block mb-2">AI-Predicted Adjacent Emerging Skills:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCluster.emergingAdjacentSkills.map((s, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold uppercase text-white">Recommended Internal Gig Match:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {currentCluster.recommendedGig}
              </p>
              <p className="text-xs font-mono text-purple-300 pt-1">
                Career Horizon: {currentCluster.growthTrajectory}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. AI AGENTS IN HUMAN CAPITAL SPOTLIGHT
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-purple-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-500">
                COGNITIVE PEOPLE ANALYTICS • EMPOWERMENT AGENTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Embedded AI Agents in Modern Human Experience
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
              Equip your organization with intelligent agents that personalize career trajectories, continuously audit pay parity, and protect team well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiHcmAgents.map((agent) => (
              <div
                key={agent.id}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-500 uppercase tracking-wider block mb-1">
                    {agent.role}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {agent.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Impact Metric:</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">{agent.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. ENTERPRISE CASE STUDIES
            ========================================================================= */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-purple-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-500">
                PROVEN HUMAN EXPERIENCE TRANSFORMATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1931] dark:text-white tracking-tight">
              Enterprise HXM Transformation Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-[#071326] border border-slate-200 dark:border-white/10 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    {cs.client}
                  </h3>
                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold">
                    {cs.scale}
                  </span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <p><strong className="text-slate-900 dark:text-white">Challenge:</strong> {cs.challenge}</p>
                  <p><strong className="text-slate-900 dark:text-white">Architecture:</strong> {cs.solution}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5 font-mono">
                  {cs.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. FAQS & WORKFORCE ADVISORY CTA
            ========================================================================= */}
        <section className="bg-gradient-to-br from-[#0B0A21] via-[#0D0A2C] to-[#040C1A] rounded-3xl border border-purple-500/20 p-8 sm:p-12 shadow-2xl text-white space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              <span>EXECUTIVE CHRO ADVISORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Frequently Asked Questions on SuccessFactors & HXM
            </h2>
          </div>

          <div className="space-y-3">
            {hcmFaqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Ready to Modernize Your People Architecture?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Partner with SAVIC’s certified SAP SuccessFactors architects to assess your skills ontology readiness, multi-country payroll compliance, and talent mobility roadmap.
              </p>
            </div>

            <button
              onClick={() => onOpenContact('HXM Architecture Discovery Workshop')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-[#00A3E0] hover:from-purple-400 hover:to-cyan-400 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-purple-500/25 shrink-0 cursor-pointer"
            >
              <span>Schedule HXM Discovery Workshop</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>

    </div>
  );
};
