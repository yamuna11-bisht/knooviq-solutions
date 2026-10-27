import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Scan,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ChevronDown,
  Server,
  Workflow,
  Cpu,
  GitBranch,
  FileSpreadsheet,
  BrainCircuit,
  EyeOff,
  PenTool,
  CheckSquare,
  Building2,
  Truck,
  Receipt,
  CreditCard,
  Briefcase,
  FileCheck,
  Layers,
  Lock,
  Boxes,
  Maximize2,
  X
} from 'lucide-react';

interface IntelligentDocumentProcessingPageProps {
  onOpenContact?: (defaultTopic?: string) => void;
}

export const IntelligentDocumentProcessingPage: React.FC<IntelligentDocumentProcessingPageProps> = ({
  onOpenContact
}) => {
  // Lightbox modal state for hero visual
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsHeroModalOpen(false);
    };
    if (isHeroModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isHeroModalOpen]);

  // State for Architecture Comparison Tabs
  const [activeTab, setActiveTab] = useState<'comparison' | 'architecture'>('comparison');

  // State for Executive FAQs Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Core Document Categories Supported
  const documentTypes = [
    {
      title: 'Accounts Payable Invoices',
      category: 'Finance & Accounting',
      icon: Receipt,
      desc: 'Extracts multi-supplier line items, regional tax schedules, and currency conversions with direct three-way matching against open purchase orders.',
      erp: 'SAP S/4HANA Finance (FI/MM)'
    },
    {
      title: 'Bills of Lading & Waybills',
      category: 'Logistics & Supply Chain',
      icon: Truck,
      desc: 'Parses complex multi-modal shipping manifests, container identification codes, vessel details, and customs tariff classifications.',
      erp: 'SAP Transportation Management'
    },
    {
      title: 'Bank Statements & Remittance',
      category: 'Treasury & Cash Operations',
      icon: CreditCard,
      desc: 'Ingests multi-currency statement feeds and check deposit vouchers, linking unallocated cash receipts to open accounts receivable ledgers.',
      erp: 'SAP Cash Management'
    },
    {
      title: 'Commercial Contracts & MSAs',
      category: 'Legal & Procurement',
      icon: Briefcase,
      desc: 'Performs semantic clause extraction, identifying liability limits, indemnity obligations, renewal windows, and fee schedules.',
      erp: 'SAP Sourcing & CLM'
    },
    {
      title: 'Insurance Claims & FNOL',
      category: 'Claims & Healthcare',
      icon: FileCheck,
      desc: 'Processes incident reports, repair garage estimates, and hospital billing sheets with automated privacy masking for personal identities.',
      erp: 'SAP Claims Management'
    },
    {
      title: 'Customs & Origin Filings',
      category: 'Cross-Border Compliance',
      icon: Building2,
      desc: 'Deconstructs multi-country trade documentation, origin affidavits, and dual-use export certificates to eliminate regulatory transit delays.',
      erp: 'SAP Global Trade Services'
    }
  ];

  // Core Transformation Pillars
  const transformationPillars = [
    {
      icon: BrainCircuit,
      title: 'Multimodal Spatial Cognition',
      desc: 'Fuses spatial layout coordinates with deep language semantics. The model understands documents contextually, eliminating the need for rigid pixel templates.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Graph Neural Table Parsing',
      desc: 'Deconstructs sprawling multi-page and borderless tables with graph neural networks, linking descriptions to line rates with complete mathematical accuracy.'
    },
    {
      icon: PenTool,
      title: 'Forensic Handwriting & Marks',
      desc: 'Specialized recurrent neural decoders capture cursive annotations, warehouse tally marks, checkmarks, and stamped authorizations on degraded paper.'
    },
    {
      icon: Server,
      title: 'Clean-Core ERP Ingestion',
      desc: 'Direct integration with SAP S/4HANA via native BAPIs and enterprise events, validating tolerance and posting entries with immutable audit lineage.'
    }
  ];

  // 3-Step Simple Flow
  const workflowSteps = [
    {
      step: 'INGEST',
      title: 'Omnichannel Ingestion & Enhancement',
      desc: 'Stream unstructured documents from corporate mailboxes, SFTP repositories, mobile cameras, and cloud storage. Neural pre-processing normalizes skew, contrast, and resolution.',
      icon: Scan
    },
    {
      step: 'COGNITION',
      title: 'Spatial Foundation Understanding',
      desc: 'Multimodal vision transformers evaluate 2D geometry alongside semantic tokens, extracting key-value pairs, nested tables, and handwritten notes without static templates.',
      icon: BrainCircuit
    },
    {
      step: 'EXECUTE',
      title: 'Autonomous Reconciliation & Posting',
      desc: 'High-confidence payloads validate against purchase orders and post directly into SAP S/4HANA Clean Core, while rare exceptions route to ergonomic review cockpits.',
      icon: CheckSquare
    }
  ];

  // Comparative Matrix (Zero numbers, stats, or percentages)
  const comparisonRows = [
    {
      feature: 'Extraction Architecture',
      legacy: 'Zonal OCR relying on static pixel coordinate templates',
      knooviq: 'Spatial Vision-Language Models with contextual semantic inference'
    },
    {
      feature: 'Template Maintenance',
      legacy: 'Numerous manual templates required; breaks on minor layout shifts',
      knooviq: 'Foundation cognition; understands arbitrary supplier layouts automatically'
    },
    {
      feature: 'Multi-Page Table Parsing',
      legacy: 'Rigid vertical column slicing; frequently fragments multi-page tables',
      knooviq: 'Graph neural network topology parsing spanning complex nested rows'
    },
    {
      feature: 'Degraded & Handwritten Notes',
      legacy: 'Fails on mobile phone photos, low-resolution faxes, and cursive notes',
      knooviq: 'Neural sub-pixel enhancement with specialized forensic character recognition'
    },
    {
      feature: 'Exception Management',
      legacy: 'Tedious manual re-keying into ERP; zero machine learning feedback loop',
      knooviq: 'Illuminated side-by-side verification cockpits with active learning feedback'
    },
    {
      feature: 'Enterprise ERP Alignment',
      legacy: 'Fragile batch CSV file drops requiring external middleware scripts',
      knooviq: 'Native SAP Clean-Core BAPI and OData connectors with instant reconciliation'
    }
  ];

  // Executive FAQs (Scrubbed of All Numbers, Stats, and Percentages)
  const faqs = [
    {
      question: 'How does cognitive Intelligent Document Processing differ from traditional OCR?',
      answer: 'Traditional OCR merely converts pixel bitmaps into uncontextualized strings of text, relying on fragile coordinate templates to guess where a field is located. When a vendor shifts a line item or alters an invoice layout, template OCR fails completely. In contrast, KNOOVIQ Cognitive IDP uses multimodal vision-language foundation models that understand spatial geometry and linguistic context simultaneously. The system recognizes an invoice total because it aligns below subtotal lines and adjacent to currency identifiers, regardless of where it appears on the page.'
    },
    {
      question: 'How does the platform handle unstandardized vendor invoices with irregular column layouts?',
      answer: 'Our architecture employs Graph Neural Networks combined with spatial vision transformers specifically trained on complex tabular layouts. The system treats tables as connected graphs of geometric relationships rather than rigid vertical columns. It seamlessly reconstructs multi-page tables, associates wrapped text descriptions with their corresponding unit rates, handles borderless grids, and applies subtotal mathematical validation rules to guarantee complete tabular data integrity.'
    },
    {
      question: 'How does KNOOVIQ preserve our SAP Clean Core architecture during ERP posting?',
      answer: 'We deploy document processing engines side-by-side on SAP Business Technology Platform (SAP BTP) or enterprise cloud fabrics. Extracted and validated document entities interact with SAP S/4HANA strictly through standard OData services, SAP BAPIs, and Enterprise Business Events. By avoiding modifications to core database tables or custom ABAP modifications, your SAP core remains completely clean, compliant, and ready for effortless cloud upgrades.'
    },
    {
      question: 'What straight-through processing reliability can our enterprise realistically expect?',
      answer: 'For standard machine-printed invoices, bills of lading, and bank statements, enterprises achieve dependable straight-through processing shortly after deployment. Following our closed-loop active learning process—where human corrections during exception triage automatically retrain model weights—the system autonomously resolves transactional documents, dramatically reducing human exception turnaround.'
    },
    {
      question: 'Can the system reliably parse blurry mobile photos, low-resolution faxes, and handwritten notes?',
      answer: 'Yes. Our neural pre-processing pipeline includes generative image restoration models that automatically correct skew, eliminate camera glare, balance shadows, and upscale low-resolution uploads. For handwriting and annotations, our specialized recurrent forensic character recognition engine deciphers cursive notes, warehouse tally marks, checkmarks, and inspector signatures with dependable accuracy.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0070C0] selection:text-white antialiased overflow-x-hidden">
         {/* =========================================================================
          SECTION 1: HERO SECTION (AI Agents Style Full Bleed Panoramic Background)
          IMAGE: /images/idp/intelligent_document_processing_cognitive_ai_hero.jpg
          ========================================================================= */}
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed 16:9 Panoramic Image - AI Agents Style */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/idp/intelligent_document_processing_cognitive_ai_hero.jpg"
            alt="Enterprise Intelligent Document Processing & Cognitive AI"
            className="w-full h-full object-cover object-right sm:object-[78%_center] lg:object-center brightness-[0.80] contrast-[1.02]"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Hero background image without dark blue overlays */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              {/* Practice Pill Badge (Breadcrumb and Full Screen removed) */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Intelligent Document Processing (IDP)</span>
                </div>
              </div>

              {/* Animated Headline with High-Contrast Typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
                  Intelligent Document Processing &amp; Cognitive Ingestion
                </span>
              </h1>

              {/* Subtitle with High Legibility */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1 drop-shadow-md">
                Transcend rigid zonal OCR. Deploy spatial vision-language models, table spatial transformers, and automated human-in-the-loop validation that parse complex unstructured PDFs, bills of lading, invoices, and contracts into clean SAP ERP transactions.
              </p>
            </motion.div>

            {/* Enterprise Assurance Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-cyan-200 shadow-sm">
                <BrainCircuit className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Spatial Vision-Language Models</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-emerald-200 shadow-sm">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Deep Table Transformer</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 shadow-sm">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Clean-Core Direct Ingestion</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: CORE CAPABILITIES (Simple & Attractive 4-Card Bento Grid)      */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              CORE CAPABILITIES
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Cognitive Understanding Designed for Enterprise Scale
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Legacy zonal OCR breaks when margins shift. Our cognitive architecture treats documents contextually, extracting multi-page tables, cursive annotations, and complex financial line items without static templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-xl bg-sky-50 border border-sky-100 p-3 text-[#0070C0] w-fit mb-5">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: VISUAL SPOTLIGHT (2-Column Narrative & Screen Preview)         */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Descriptive Strategic Value */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
                TRANSFORMATION SPOTLIGHT
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                From Unstructured Paperwork to Instant ERP Transactions
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Eliminate manual exception queues and late-payment penalties. By understanding 2D spatial layouts and semantic language simultaneously, KNOOVIQ reads invoices, bills of lading, and custom declarations like an experienced forensic accountant.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Zero Static Template Setup</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Instantly processes novel vendor formats and irregular column structures without manual bounding boxes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Direct Purchase Order Reconciliation</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Cross-checks quantities, unit rates, and tax sub-totals directly against SAP goods receipts in real time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#0070C0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Air-Gapped Data Privacy &amp; Masking</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Deterministic entity recognition masks personal identities and bank tokens prior to cloud transmission.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Screen */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-200 shadow-xl overflow-hidden group h-[380px] sm:h-[440px] w-full bg-slate-900">
                <img
                  src="/images/idp/idp_extraction_engine.png"
                  alt="Cognitive Document Understanding Engine"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Badge 1 */}
                <div className="absolute top-6 left-6 rounded-xl bg-slate-900/90 border border-slate-700 p-3.5 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-slate-200">Autonomous Execution Engine</span>
                  </div>
                  <p className="text-sm font-bold text-white mt-1">Straight-Through Processing</p>
                </div>

                {/* Floating Glassmorphic Badge 2 */}
                <div className="absolute bottom-6 right-6 rounded-xl bg-[#0070C0]/90 border border-sky-400/40 p-3.5 backdrop-blur-md shadow-lg text-white">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                    <span className="text-xs font-semibold">Zero-Template Config</span>
                  </div>
                  <p className="text-sm font-bold mt-1">Spatial Vision-Language LLM</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOW IT WORKS (Simple & Attractive 3-Step Journey)               */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Seamless Three-Step Cognitive Lifecycle
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              From multi-channel inbound arrival to pristine ERP journal posting, experience how documents flow autonomously through our cognitive architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((ws, i) => (
              <div 
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="rounded-xl bg-sky-50 border border-sky-100 p-3 text-[#0070C0]">
                      <ws.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0070C0] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {ws.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ENTERPRISE DOCUMENT TAXONOMY (Clean 6-Card Grid)               */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              SUPPORTED DOCUMENT TYPES
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trained for Mission-Critical Enterprise Workloads
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Pre-trained domain models optimized for enterprise finance, global shipping, corporate treasury, and international trade compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((doc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0070C0] bg-sky-50 px-2.5 py-0.5 rounded border border-sky-100">
                      {doc.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 mb-2">
                    <doc.icon className="h-5 w-5 text-[#0070C0] shrink-0" />
                    <span>{doc.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {doc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Target Destination:</span>
                  <span className="text-[#0070C0] font-bold">{doc.erp}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: ARCHITECTURAL RIGOR & COMPARISON (Clean 2-Tab View)            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              ARCHITECTURAL RIGOR
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Topological Architecture &amp; Comparative Analysis
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              Evaluate our zero-template cognitive IDP fabric against traditional coordinate OCR, and examine our full-stack enterprise integration architecture.
            </p>

            {/* Simple Tab Switcher */}
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                  activeTab === 'comparison'
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Transformation Comparison Matrix
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-[#0070C0] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Full-Stack Architecture Visual
              </button>
            </div>
          </div>

          {/* TAB 1: Comparison Matrix */}
          {activeTab === 'comparison' && (
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                      <th className="py-4 px-6">Architectural Dimension</th>
                      <th className="py-4 px-6 text-slate-500">Legacy Zonal OCR &amp; Static Templates</th>
                      <th className="py-4 px-6 text-[#0070C0] bg-sky-50/50">KNOOVIQ Cognitive IDP Fabric</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-4 px-6 text-slate-500">{row.legacy}</td>
                        <td className="py-4 px-6 font-semibold text-slate-800 bg-sky-50/30 flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#0070C0] flex-shrink-0 mt-0.5" />
                          <span>{row.knooviq}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: Full-Stack Architecture Visual */}
          {activeTab === 'architecture' && (
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-xl overflow-hidden">
                <img
                  src="/images/idp/idp_architecture_mesh.png"
                  alt="KNOOVIQ Full-Stack IDP Topological Architecture"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Ingestion &amp; Normalization Layer</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Decoupled message queues ingesting PDFs, TIFFs, and mobile captures. Generative filters perform orientation rotation, deskewing, and super-resolution de-noising.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Spatial Layout &amp; Graph Extraction</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spatial foundation models and graph neural networks parse semantic key-values and tabular structures, generating field-level Bayesian confidence evaluations.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Active-Learning HITL &amp; ERP Sync</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Side-by-side verification cockpits handle exceptions with single-click feedback, while validated payloads post directly into SAP S/4HANA via native BAPIs.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: EXECUTIVE FAQS ACCORDION (Clean & Collapsible)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0070C0] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Executive FAQs: Cognitive Document Intelligence
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Clear answers to the most common architectural, accuracy, privacy, and ERP integration questions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0070C0] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      activeFaq === idx ? 'rotate-180 text-[#0070C0]' : ''
                    }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: SAPPHIRE EXECUTIVE STRATEGY CTA RIBBON                          */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-r from-[#00529B] via-[#0070C0] to-[#00A3E0] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            MODERNIZE YOUR DOCUMENT VALUE CHAIN
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Eliminate Template Brittleness and Automate Enterprise Document Processing?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Partner with KNOOVIQ to benchmark your documents, audit straight-through potential, and deploy self-learning multimodal vision transformers integrated with SAP S/4HANA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact ? onOpenContact('IDP Modernization Workshop') : null}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0070C0] shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule IDP Modernization Workshop</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              to="/digital-intelligence/process-automation"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Process Automation</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Screen Lightbox Modal */}
      {isHeroModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] bg-slate-950 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Enterprise Intelligent Document Processing &amp; Cognitive Ingestion
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsHeroModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src="/images/idp/intelligent_document_processing_cognitive_ai_hero.jpg"
                alt="Enterprise IDP Architecture Full View"
                className="w-full h-auto max-h-[78vh] object-contain rounded-lg"
              />
            </div>
            <div className="px-5 py-2.5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Full Panoramic Architecture Diagram</span>
              <span className="text-cyan-400">Press ESC or click outside to close</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default IntelligentDocumentProcessingPage;
