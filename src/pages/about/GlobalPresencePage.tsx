import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe2, 
  Building2, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Compass,
  Sparkles,
  Network,
  Cpu,
  Layers,
  TrendingUp,
  Zap,
  Briefcase,
  Factory,
  HeartPulse,
  Flame,
  Car,
  ShoppingBag,
  Server,
  Boxes,
  Users,
  Handshake
} from 'lucide-react';
import { AboutSubnav } from '../../components/AboutSubnav';

export const GlobalPresencePage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  // Verified Locations Data with Photography, Flags & Color Accents
  const verifiedOffices = [
    {
      id: 'mumbai',
      city: 'Mumbai Global HQ',
      country: 'India',
      flag: '🇮🇳',
      badge: 'Primary Global HQ',
      address: 'B15, Shree Siddhivinayak Plaza, Opp. City Mall, Off Link Road, Andheri (W), Mumbai - 400053, Maharashtra, India',
      role: 'Corporate Headquarters, Executive Leadership & Strategic Governance',
      phone: '+91-7900073410',
      email: 'admin@knooviq.com',
      cin: 'U72900MH2023PTC410884',
      timezone: 'IST (UTC +5:30)',
      localTime: 'IST • Business Hub',
      status: 'Active (IST)',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop',
      themeGradient: 'from-blue-600 via-indigo-600 to-cyan-500',
      accentBorder: 'border-blue-500',
      pillBg: 'bg-blue-50 text-blue-700 border-blue-200',
      mapsUrl: 'https://maps.google.com/?q=Shree+Siddhivinayak+Plaza+Andheri+West+Mumbai',
      coordinates: { x: '58%', y: '48%' }
    },
    {
      id: 'pune',
      city: 'Pune Delivery Hub',
      country: 'India',
      flag: '🇮🇳',
      badge: 'Core Engineering Hub',
      address: 'Magarpatta Cybercity, Tower 7, Hadapsar, Pune, Maharashtra 411028',
      role: 'Offshore Development, Automated Regression Testing & Core Engineering',
      phone: '+91-7900073410',
      email: 'admin@knooviq.com',
      cin: 'U72900MH2023PTC410884',
      timezone: 'IST (UTC +5:30)',
      localTime: 'IST • Engineering 24/7',
      status: 'Operational 24/7',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800&auto=format&fit=crop',
      themeGradient: 'from-cyan-600 via-teal-600 to-emerald-500',
      accentBorder: 'border-cyan-500',
      pillBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      mapsUrl: 'https://maps.google.com/?q=Magarpatta+Cybercity+Hadapsar+Pune',
      coordinates: { x: '59%', y: '50%' }
    },
    {
      id: 'bengaluru',
      city: 'Bengaluru Innovation Center',
      country: 'India',
      flag: '🇮🇳',
      badge: 'Cloud Innovation Lab',
      address: 'Outer Ring Road Tech Corridor, Bellandur, Bengaluru, Karnataka 560103',
      role: 'SAP BTP Cloud Innovation, Microservices & Event Mesh Lab',
      phone: '+91-7900073410',
      email: 'admin@knooviq.com',
      cin: 'U72900MH2023PTC410884',
      timezone: 'IST (UTC +5:30)',
      localTime: 'IST • BTP Lab',
      status: 'Operational 24/7',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      themeGradient: 'from-purple-600 via-indigo-600 to-violet-500',
      accentBorder: 'border-purple-500',
      pillBg: 'bg-purple-50 text-purple-700 border-purple-200',
      mapsUrl: 'https://maps.google.com/?q=Outer+Ring+Road+Bellandur+Bengaluru',
      coordinates: { x: '59%', y: '53%' }
    },
    {
      id: 'dubai',
      city: 'Dubai Partner Hub',
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      badge: 'Middle East & EMEA Gateway',
      address: 'Dubai Internet City, Building 3, P.O. Box 500001, Dubai, UAE',
      role: 'Middle East & GCC Enterprise Client Delivery & Partner Engagements',
      phone: '+91-7900073410',
      email: 'admin@knooviq.com',
      cin: 'Enterprise Partner Desk',
      timezone: 'GST (UTC +4:00)',
      localTime: 'GST • Client Advisory',
      status: 'Active (GST)',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
      themeGradient: 'from-amber-500 via-orange-500 to-yellow-500',
      accentBorder: 'border-amber-500',
      pillBg: 'bg-amber-50 text-amber-800 border-amber-200',
      mapsUrl: 'https://maps.google.com/?q=Dubai+Internet+City+Building+3',
      coordinates: { x: '52%', y: '42%' }
    },
    {
      id: 'singapore',
      city: 'Singapore Regional Advisory',
      country: 'Singapore',
      flag: '🇸🇬',
      badge: 'APAC Regional Advisory',
      address: 'Marina Bay Financial Centre, Tower 2, Singapore 018983',
      role: 'APAC Regional Transformation, Architecture Governance & Advisory',
      phone: '+91-7900073410',
      email: 'admin@knooviq.com',
      cin: 'Regional Advisory Desk',
      timezone: 'SGT (UTC +8:00)',
      localTime: 'SGT • APAC Desk',
      status: 'Active (SGT)',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop',
      themeGradient: 'from-emerald-600 via-teal-600 to-cyan-500',
      accentBorder: 'border-emerald-500',
      pillBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      mapsUrl: 'https://maps.google.com/?q=Marina+Bay+Financial+Centre+Tower+2+Singapore',
      coordinates: { x: '72%', y: '56%' }
    }
  ];

  // State Management
  const [selectedOfficeIndex, setSelectedOfficeIndex] = useState(0);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [activeNetworkNode, setActiveNetworkNode] = useState<'clients' | 'partners' | 'industries' | 'technology' | 'talent' | 'markets'>('clients');
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [activeCollabStep, setActiveCollabStep] = useState(0);

  // Regional Nodes for Section 1 Globe
  const regionalNodes = [
    { id: 'americas', name: 'Americas', role: 'Global Enterprise Engagements & Cloud Advisory', x: 22, y: 38 },
    { id: 'europe', name: 'Europe', role: 'UK & EU Cross-Border S/4HANA Modernization', x: 44, y: 26 },
    { id: 'india', name: 'KNOOVIQ Core', role: 'Mumbai HQ, Pune Hub & Bengaluru Cloud Lab', x: 58, y: 46, isCore: true },
    { id: 'middleEast', name: 'Middle East', role: 'Dubai Partner Hub — GCC & EMEA Delivery', x: 50, y: 40 },
    { id: 'asia', name: 'Asia-Pacific', role: 'Singapore Regional Advisory & APAC Gateway', x: 74, y: 52 },
    { id: 'australia', name: 'Australia', role: 'Oceania Strategic Enterprise Corridor', x: 82, y: 72 }
  ];

  // Section 2: Network Graph Satellite Nodes
  const networkNodes = [
    {
      id: 'clients' as const,
      label: 'Clients',
      icon: Building2,
      tag: 'ENTERPRISE ECOSYSTEM',
      summary: 'Partnering with multi-region corporations and high-growth mid-market enterprises across global corridors.',
      metrics: 'Fortune 500 & Global Mid-Market',
      color: 'cyan',
      coords: { top: '15%', left: '50%', transform: 'translate(-50%, -50%)' }
    },
    {
      id: 'partners' as const,
      label: 'Partners',
      icon: Handshake,
      tag: 'STRATEGIC ALLIANCES',
      summary: 'Collaborating across the SAP ecosystem, hyperscalers (AWS, Azure, GCP), and certified systems integrators.',
      metrics: 'SAP Partner & Hyperscalers',
      color: 'sky',
      coords: { top: '48%', left: '12%', transform: 'translate(-50%, -50%)' }
    },
    {
      id: 'industries' as const,
      label: 'Industries',
      icon: Briefcase,
      tag: 'SECTOR BENCHMARKS',
      summary: 'Deep vertical expertise spanning 8 discrete industries with pre-configured clean core architectures.',
      metrics: '8 Targeted Enterprise Sectors',
      color: 'indigo',
      coords: { top: '48%', left: '88%', transform: 'translate(-50%, -50%)' }
    },
    {
      id: 'technology' as const,
      label: 'Technology',
      icon: Cpu,
      tag: 'NEXT-GEN ARCHITECTURE',
      summary: 'SAP S/4HANA Cloud, BTP Integration Suite, Event Mesh, clean core extensibility, and AI automations.',
      metrics: 'Clean Core & BTP Native',
      color: 'violet',
      coords: { top: '82%', left: '50%', transform: 'translate(-50%, -50%)' }
    },
    {
      id: 'talent' as const,
      label: 'Talent',
      icon: Users,
      tag: 'GLOBAL ARCHITECTURE GUILD',
      summary: '100+ domain consultants, SAP certified principal architects, and continuous engineering talent.',
      metrics: '100+ Specialized Consultants',
      color: 'teal',
      coords: { top: '78%', left: '22%', transform: 'translate(-50%, -50%)' }
    },
    {
      id: 'markets' as const,
      label: 'Markets',
      icon: Globe2,
      tag: 'CROSS-BORDER CORRIDORS',
      summary: 'Active footprints connecting Indian innovation hubs with the Middle East, APAC, Europe, and the Americas.',
      metrics: '5 Multi-Region Corridors',
      color: 'emerald',
      coords: { top: '78%', left: '78%', transform: 'translate(-50%, -50%)' }
    }
  ];

  // Section 3: Industry Presence Ecosystem
  const industryEcosystem = [
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      badge: 'GxP & Patient Track',
      summary: 'Pharmaceutical cold-chain traceability, validation compliance, and patient data confidentiality under strict regulatory protocols.',
      solutions: ['SAP S/4HANA Life Sciences', 'Batch Traceability', 'GxP Compliance Validator']
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Discrete',
      icon: Factory,
      badge: 'Industry 4.0',
      summary: 'Smart factory orchestration, MES-to-ERP digital thread integration, and predictive maintenance for shop-floor optimization.',
      solutions: ['SAP Digital Manufacturing (DMC)', 'OEE Telemetry', 'Clean Core Production Hub']
    },
    {
      id: 'oilGas',
      name: 'Oil & Gas Upstream/Downstream',
      icon: Flame,
      badge: 'Capital Asset Care',
      summary: 'Hydrocarbon supply accounting, joint venture management, asset integrity tracking, and strict environmental safety protocols.',
      solutions: ['SAP S/4HANA Oil & Gas', 'Joint Venture Accounting', 'EHS Asset Monitor']
    },
    {
      id: 'automotive',
      name: 'Automotive & Mobility',
      icon: Car,
      badge: 'Tier-1 Precision',
      summary: 'Just-in-Time (JIT/JIS) sequenced delivery, global supplier collaboration portal, and automated warranty claim reconciliation.',
      solutions: ['Automotive Supply Chain', 'JIT Production Cockpit', 'Warranty Lifecycle Suite']
    },
    {
      id: 'retail',
      name: 'Retail & Consumer Goods',
      icon: ShoppingBag,
      badge: 'Unified Commerce',
      summary: 'Real-time multi-store inventory synchronization, omnichannel POS integration, and automated demand replenishment cycles.',
      solutions: ['SAP Customer Activity Repository (CAR)', 'Omnichannel POS Sync', 'Inventory Optimization']
    },
    {
      id: 'energy',
      name: 'Energy & Utilities',
      icon: Zap,
      badge: 'Smart Grid Asset',
      summary: 'Smart metering analytics, transmission infrastructure governance, and renewable energy credit asset balance monitoring.',
      solutions: ['SAP for Utilities (IS-U)', 'Grid Telemetry Integration', 'Tariff Governance Engine']
    },
    {
      id: 'trading',
      name: 'Trading & Distribution',
      icon: Boxes,
      badge: 'Commodity Flow',
      summary: 'High-velocity commodity trade risk management (CTRM), bonded warehouse logistics, and global customs tariff clearance.',
      solutions: ['Commodity Management Suite', 'Bonded Warehouse Extended WM', 'Global Trade Services (GTS)']
    },
    {
      id: 'technology',
      name: 'Technology & Cloud SaaS',
      icon: Server,
      badge: 'Scalable Microservices',
      summary: 'Recurring billing subscriptions, high-concurrency microservice APIs, and automated clean core financial reconciliation.',
      solutions: ['SAP Subscription Billing', 'BTP Event Mesh', 'Clean Core Cloud Architecture']
    }
  ];

  // Section 4: Collaboration Flow Steps
  const collaborationSteps = [
    {
      step: '01',
      title: 'Local Expertise',
      tag: 'ORIGIN FOUNDATION',
      desc: 'Deep engineering competence honed at our Mumbai and Pune delivery hubs, executing high-assurance SAP and cloud initiatives.',
      badge: 'Delivery Hubs'
    },
    {
      step: '02',
      title: 'Strategic Connections',
      tag: 'ALLIANCE MATRIX',
      desc: 'Forging direct synergies with enterprise stakeholders, SAP product guilds, and global hyperscaler partner networks.',
      badge: 'Alliances'
    },
    {
      step: '03',
      title: 'Cross-Border Collaboration',
      tag: '24/7 SYNERGY',
      desc: 'Unifying specialized offshore engineering with regional on-ground advisory across India, Dubai, and Singapore.',
      badge: 'Follow-the-Sun'
    },
    {
      step: '04',
      title: 'Global Opportunities',
      tag: 'SCALE HORIZONS',
      desc: 'Architecting clean core solutions that allow enterprises to seamlessly enter new markets and rapidly scale business models.',
      badge: 'Clean Core'
    },
    {
      step: '05',
      title: 'Global Impact',
      tag: 'MULTIPLIED VALUE',
      desc: 'Delivering sustained operational resilience, zero-defect cutovers, and measurable commercial ROI on worldwide deployments.',
      badge: 'Enterprise ROI'
    }
  ];

  // Auto-cycling for Section 2: Network Graph Satellite Nodes (1s cadence, 5s pause on click)
  const networkNodeIds: Array<'clients' | 'partners' | 'industries' | 'technology' | 'talent' | 'markets'> = React.useMemo(() => [
    'clients', 'partners', 'industries', 'technology', 'talent', 'markets'
  ], []);
  const networkIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const networkPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startNetworkAutoCycle = React.useCallback(() => {
    if (networkIntervalRef.current) clearInterval(networkIntervalRef.current);
    networkIntervalRef.current = setInterval(() => {
      setActiveNetworkNode((prev) => {
        const currentIdx = networkNodeIds.indexOf(prev);
        const nextIdx = (currentIdx + 1) % networkNodeIds.length;
        return networkNodeIds[nextIdx];
      });
    }, 1000);
  }, [networkNodeIds]);

  const handleNetworkNodeClick = (nodeId: 'clients' | 'partners' | 'industries' | 'technology' | 'talent' | 'markets') => {
    setActiveNetworkNode(nodeId);
    if (networkIntervalRef.current) {
      clearInterval(networkIntervalRef.current);
      networkIntervalRef.current = null;
    }
    if (networkPauseTimerRef.current) {
      clearTimeout(networkPauseTimerRef.current);
    }
    networkPauseTimerRef.current = setTimeout(() => {
      startNetworkAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startNetworkAutoCycle();
    return () => {
      if (networkIntervalRef.current) clearInterval(networkIntervalRef.current);
      if (networkPauseTimerRef.current) clearTimeout(networkPauseTimerRef.current);
    };
  }, [startNetworkAutoCycle]);

  // Auto-cycling for Section 3: Industry Presence Ecosystem (1s cadence, 5s pause on click)
  const industryIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const industryPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startIndustryAutoCycle = React.useCallback(() => {
    if (industryIntervalRef.current) clearInterval(industryIntervalRef.current);
    industryIntervalRef.current = setInterval(() => {
      setActiveIndustryIndex((prev) => (prev + 1) % industryEcosystem.length);
    }, 1000);
  }, [industryEcosystem.length]);

  const handleIndustryClick = (idx: number) => {
    setActiveIndustryIndex(idx);
    if (industryIntervalRef.current) {
      clearInterval(industryIntervalRef.current);
      industryIntervalRef.current = null;
    }
    if (industryPauseTimerRef.current) {
      clearTimeout(industryPauseTimerRef.current);
    }
    industryPauseTimerRef.current = setTimeout(() => {
      startIndustryAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startIndustryAutoCycle();
    return () => {
      if (industryIntervalRef.current) clearInterval(industryIntervalRef.current);
      if (industryPauseTimerRef.current) clearTimeout(industryPauseTimerRef.current);
    };
  }, [startIndustryAutoCycle]);

  const activeOffice = verifiedOffices[selectedOfficeIndex];
  const activeIndustry = industryEcosystem[activeIndustryIndex];
  const activeNodeData = networkNodes.find(n => n.id === activeNetworkNode) || networkNodes[0];

  return (
    <div className="pb-20 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* Background Aurora */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20" />

      {/* Hero Header with Worldwide Metropolis Skyline Background Image */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Background Image with Directional Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop" 
            alt="Worldwide Presence and Global Office Hubs"
            className="w-full h-full object-cover object-center"
          />
          {/* Mild Contrast Scrim: Clear metropolis skyline photo with soft text shading */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-slate-900/90 border border-cyan-400/40 text-cyan-300 mb-5 backdrop-blur-md shadow-2xl"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
              <span className="font-mono uppercase text-xs tracking-wider font-bold">Headquarters & International Footprint</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              Global <span className="hero-gradient-cyan font-black">Presence</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              Rooted at our corporate headquarters in Mumbai, Maharashtra, KNOOVIQ orchestrates high-assurance delivery across specialized offshore engineering centers, regional client hubs, and cross-border SAP transformation networks.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Mumbai Global Headquarters</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Multi-Region Delivery Network</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>24/7 Follow-the-Sun Operations</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Sub-Navigation Bar */}
      <AboutSubnav activeTabTitle="Global Presence" />

      {/* =========================================================================
          SECTION 1 — GLOBAL REACH ("Connected Across Markets")
          Vibrant, colorful enterprise light theme + Interactive Geo-Spatial Map + Verified Location HUD
          Compact height (~500px on desktop)
          ========================================================================= */}
      <section className="py-14 sm:py-16 relative overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-[#EEF5FC] text-slate-900 border-b border-slate-200/80">
        {/* Soft colorful ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200 shadow-sm mb-3">
              <Globe2 className="h-3.5 w-3.5 text-blue-600 animate-spin" style={{ animationDuration: '25s' }} />
              <span>Worldwide Footprint • Follow-The-Sun Coverage</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Connected Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Global Markets</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Expanding expertise, physical delivery hubs, and strategic enterprise partnerships across international borders.
            </p>
          </div>

          {/* Compact 2-Column Console: Interactive World Map on Left, Rich Location Showcase on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Geo-Spatial Footprint Map Console (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl p-6 bg-white border border-slate-200 shadow-xl overflow-hidden min-h-[380px] sm:min-h-[430px] flex items-center justify-center">
                
                {/* SVG Stylized World Map with Glowing Location Hotspots */}
                <div className="relative w-full max-w-[500px] aspect-[16/10] flex items-center justify-center">
                  
                  {/* Subtle Map Coordinate Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 rounded-2xl" />

                  {/* Stylized SVG Continents */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 65" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="mapBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0052CC" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#00A3E0" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>

                    {/* Continents Outlines (Stylized) */}
                    {/* Americas */}
                    <path d="M 14,15 Q 22,12 26,20 Q 24,28 18,34 Q 22,46 25,58 Q 20,60 16,48 Q 12,32 14,15 Z" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="0.5" />
                    {/* Europe & Africa */}
                    <path d="M 44,12 Q 52,10 55,18 Q 58,26 56,36 Q 52,48 48,56 Q 42,46 44,30 Q 42,20 44,12 Z" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="0.5" />
                    {/* Asia & India */}
                    <path d="M 58,14 Q 72,12 84,20 Q 86,32 78,40 Q 68,44 62,42 Q 58,36 58,24 Z" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="0.5" />
                    {/* Australia */}
                    <path d="M 76,46 Q 86,44 88,52 Q 86,58 78,58 Q 74,52 76,46 Z" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="0.5" />

                    {/* Connecting Pulsing Corridors from India Core (62, 34) */}
                    {/* India to Middle East (52, 28) */}
                    <line x1="62" y1="34" x2="52" y2="28" stroke="url(#mapBeam)" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
                    {/* India to Singapore (73, 40) */}
                    <line x1="62" y1="34" x2="73" y2="40" stroke="url(#mapBeam)" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
                    {/* India to Europe (48, 18) */}
                    <line x1="62" y1="34" x2="48" y2="18" stroke="url(#mapBeam)" strokeWidth="1" strokeDasharray="1.5 1.5" />
                    {/* India to Americas (22, 24) */}
                    <line x1="62" y1="34" x2="22" y2="24" stroke="url(#mapBeam)" strokeWidth="1" strokeDasharray="1.5 1.5" />
                    {/* India to Australia (80, 52) */}
                    <line x1="62" y1="34" x2="80" y2="52" stroke="url(#mapBeam)" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
                  </svg>

                  {/* Interactive Verified Location Pins */}
                  {verifiedOffices.map((office, idx) => {
                    const isSelected = selectedOfficeIndex === idx;

                    return (
                      <div
                        key={office.id}
                        onClick={() => setSelectedOfficeIndex(idx)}
                        onMouseEnter={() => setSelectedOfficeIndex(idx)}
                        style={{ left: office.coordinates.x, top: office.coordinates.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                      >
                        {/* Glowing Beacon with Ping Effect */}
                        <div className={`relative rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'w-7 h-7 bg-blue-600 shadow-[0_0_16px_rgba(0,82,204,0.6)] scale-110'
                            : 'w-4 h-4 bg-blue-500 shadow-md hover:scale-125'
                        }`}>
                          {isSelected && (
                            <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                          )}
                          <span className="text-[10px] font-bold text-white leading-none">
                            {office.flag}
                          </span>
                        </div>

                        {/* Location Label Pill */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold whitespace-nowrap shadow-sm transition-all duration-200 pointer-events-none ${
                          isSelected
                            ? 'bg-blue-600 text-white scale-105 shadow-md'
                            : 'bg-white/90 text-slate-700 border border-slate-200 group-hover:bg-blue-50'
                        }`}>
                          {office.city.split(' ')[0]}
                        </div>
                      </div>
                    );
                  })}

                  {/* International Corridors (Americas & Europe Labels) */}
                  <div className="absolute top-[35%] left-[18%] -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-white/80 border border-slate-200 text-[8px] font-mono text-slate-600 font-bold shadow-xs">
                    Americas Corridor
                  </div>
                  <div className="absolute top-[24%] left-[46%] -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-white/80 border border-slate-200 text-[8px] font-mono text-slate-600 font-bold shadow-xs">
                    Europe Corridor
                  </div>
                </div>

                {/* Bottom Interactive Legend */}
                <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-100 pt-2.5">
                  <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    ACTIVE GEO-SPATIAL FOOTPRINT
                  </span>
                  <span className="text-slate-400 hidden sm:inline">Tap any pin to view physical hub details</span>
                </div>

              </div>
            </div>

            {/* Right: Rich Colorful Location Detail Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              
              {/* Location Switcher Pills */}
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {verifiedOffices.map((office, idx) => (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOfficeIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      selectedOfficeIndex === idx
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-102 font-extrabold'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{office.flag}</span>
                    <span>{office.city.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Active Location Showcase Card with Photo Banner */}
              <motion.div
                key={activeOffice.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between flex-grow"
              >
                {/* Photo Banner of City */}
                <div className="relative h-32 w-full overflow-hidden">
                  <img 
                    src={activeOffice.image} 
                    alt={activeOffice.city} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  {/* Floating Flag & Badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{activeOffice.flag}</span>
                      <div>
                        <h3 className="font-display text-lg font-black leading-tight text-white">{activeOffice.city}</h3>
                        <span className="text-[10px] font-mono text-cyan-300 font-bold">{activeOffice.country}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/20 border border-white/30 backdrop-blur-md">
                      {activeOffice.localTime}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${activeOffice.pillBg}`}>
                      {activeOffice.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {activeOffice.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 font-sans leading-relaxed mb-4 font-medium">
                    {activeOffice.role}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 font-sans border-t border-slate-100 pt-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{activeOffice.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <a href={`tel:${activeOffice.phone}`} className="font-mono text-[11px] font-bold text-slate-800 hover:text-blue-600">{activeOffice.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <a href={`mailto:${activeOffice.email}`} className="font-mono text-[11px] font-bold text-slate-800 hover:text-blue-600">{activeOffice.email}</a>
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={activeOffice.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenContact(`${activeOffice.city} Inquiry`)}
                    className="btn-primary-gradient shimmer-sweep px-4 py-2 rounded-xl text-xs font-display font-bold uppercase tracking-wider text-white shadow-sm cursor-pointer"
                  >
                    Contact Hub
                  </button>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — GLOBAL NETWORK ("A Network Built for Global Collaboration")
          Vibrant Color-Coded Business Constellation Graph
          ========================================================================= */}
      <section className="py-14 sm:py-16 relative overflow-hidden bg-gradient-to-b from-[#EEF5FC] via-white to-[#F5F3FF] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm mb-3">
              <Network className="h-3.5 w-3.5 text-indigo-600" />
              <span>Multi-Region Enterprise Mesh</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A Network Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500">Global Collaboration</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              An interconnected digital business graph orchestrating clients, hyperscaler partners, industries, and specialized engineering talent across our worldwide hubs.
            </p>
          </div>

          {/* Interactive Network Graph Arena */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Constellation Canvas (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl p-6 bg-white border border-slate-200 shadow-xl h-[380px] sm:h-[430px] flex items-center justify-center overflow-hidden">
                
                {/* SVG Circuit Connectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="colorBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0052CC" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Subtle Background Rings */}
                  <circle cx="50" cy="48" r="26" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50" cy="48" r="38" fill="none" stroke="#E2E8F0" strokeWidth="0.75" />

                  {/* Radiating Laser Vectors */}
                  <line x1="50" y1="48" x2="50" y2="15" stroke={activeNetworkNode === 'clients' ? '#00A3E0' : 'url(#colorBeam)'} strokeWidth={activeNetworkNode === 'clients' ? '2.5' : '1.2'} />
                  <line x1="50" y1="48" x2="12" y2="48" stroke={activeNetworkNode === 'partners' ? '#10B981' : 'url(#colorBeam)'} strokeWidth={activeNetworkNode === 'partners' ? '2.5' : '1.2'} />
                  <line x1="50" y1="48" x2="88" y2="48" stroke={activeNetworkNode === 'industries' ? '#6366F1' : 'url(#colorBeam)'} strokeWidth={activeNetworkNode === 'industries' ? '2.5' : '1.2'} />
                  <line x1="50" y1="48" x2="50" y2="82" stroke={activeNetworkNode === 'technology' ? '#8B5CF6' : 'url(#colorBeam)'} strokeWidth={activeNetworkNode === 'technology' ? '2.5' : '1.2'} />
                  <line x1="50" y1="48" x2="22" y2="78" stroke={activeNetworkNode === 'talent' ? '#F59E0B' : 'url(#colorBeam)'} strokeWidth={activeNetworkNode === 'talent' ? '2.5' : '1.2'} />
                  <line x1="50" y1="48" x2="78" y2="78" stroke={activeNetworkNode === 'markets' ? '#F43F5E' : 'url(#colorBeam)'} strokeWidth={activeNetworkNode === 'markets' ? '2.5' : '1.2'} />
                </svg>

                {/* Central KNOOVIQ Core Nexus Disc */}
                <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#0A2540] via-[#0052CC] to-[#00A3E0] shadow-[0_10px_30px_rgba(0,82,204,0.4)] flex flex-col items-center justify-center p-2 text-center text-white border-2 border-white">
                    <Sparkles className="h-4 w-4 text-cyan-300 mb-0.5" />
                    <span className="font-display text-xs sm:text-sm font-black tracking-wider">KNOOVIQ</span>
                    <span className="text-[7px] font-mono text-cyan-200 tracking-widest uppercase">GLOBAL CORE</span>
                  </div>
                </div>

                {/* 6 Color-Coded Satellite Nodes */}
                {networkNodes.map((node) => {
                  const NodeIcon = node.icon;
                  const isActive = activeNetworkNode === node.id;

                  return (
                    <motion.div
                      key={node.id}
                      style={node.coords}
                      onClick={() => handleNetworkNodeClick(node.id)}
                      whileHover={{ scale: 1.12 }}
                      className="absolute z-20 cursor-pointer flex flex-col items-center group transition-all duration-300"
                    >
                      <div className={`h-11 w-11 sm:h-12 sm:w-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl scale-115 border-2 border-white'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-500 hover:text-blue-600'
                      }`}>
                        <NodeIcon className="h-5 w-5" />
                      </div>
                      
                      <span className={`mt-1 px-2 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-white text-slate-600 border border-slate-200 group-hover:bg-blue-50'
                      }`}>
                        {node.label}
                      </span>
                    </motion.div>
                  );
                })}

              </div>
            </div>

            {/* Right: Active Node Strategic Insight Console (5 Cols) */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNodeData.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl p-6 sm:p-7 bg-white border border-indigo-200 shadow-xl h-[380px] sm:h-[430px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {activeNodeData.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-blue-600">
                        Node: {activeNodeData.label}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                      Connected {activeNodeData.label}
                    </h3>
                    
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
                      <span className="font-mono text-[10px] text-slate-500 uppercase block mb-1">Scale Metric</span>
                      <span className="font-display text-base font-bold text-indigo-700">{activeNodeData.metrics}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-4">
                      {activeNodeData.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Integrated with KNOOVIQ Core</span>
                    <button
                      onClick={() => onOpenContact(`Network Inquiry: ${activeNodeData.label}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                    >
                      <span>Explore Connections</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — INDUSTRY PRESENCE ("Expertise Across Industries")
          Vibrant Multi-Sector Color-Coded Radial Ecosystem
          ========================================================================= */}
      <section className="py-14 sm:py-16 relative overflow-hidden bg-gradient-to-b from-[#F5F3FF] via-white to-[#F0FDF4] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm mb-3">
              <Layers className="h-3.5 w-3.5 text-emerald-600" />
              <span>Cross-Industry Global Reach</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600">Industries</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              A unified enterprise ecosystem serving specialized sectors with domain-driven SAP and cloud innovation across international geographies.
            </p>
          </div>

          {/* 8 Distinctly Colored Industry Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: 8 Colorful Industry Buttons (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {industryEcosystem.map((ind, idx) => {
                  const IndIcon = ind.icon;
                  const isSelected = activeIndustryIndex === idx;

                  // Color styling by industry index
                  const colorThemes = [
                    'hover:border-rose-400 bg-rose-50/70 text-rose-700',
                    'hover:border-amber-400 bg-amber-50/70 text-amber-800',
                    'hover:border-orange-400 bg-orange-50/70 text-orange-700',
                    'hover:border-blue-400 bg-blue-50/70 text-blue-700',
                    'hover:border-emerald-400 bg-emerald-50/70 text-emerald-700',
                    'hover:border-yellow-400 bg-yellow-50/70 text-yellow-800',
                    'hover:border-cyan-400 bg-cyan-50/70 text-cyan-700',
                    'hover:border-purple-400 bg-purple-50/70 text-purple-700'
                  ];

                  return (
                    <motion.div
                      key={ind.id}
                      onClick={() => handleIndustryClick(idx)}
                      whileHover={{ y: -3 }}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${colorThemes[idx % colorThemes.length]} ${
                        isSelected
                          ? 'border-2 border-slate-900 shadow-md scale-102 font-bold'
                          : 'border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-9 w-9 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          <IndIcon className="h-4 w-4" />
                        </div>
                        <span className="text-[9px] font-mono text-slate-500 font-bold">0{idx + 1}</span>
                      </div>

                      <h4 className="font-display text-xs font-bold leading-tight line-clamp-2 text-slate-900">
                        {ind.name}
                      </h4>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: Dynamic Industry Console (5 Cols) */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 shadow-xl flex flex-col justify-between min-h-[360px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {activeIndustry.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        Sector 0{activeIndustryIndex + 1} / 08
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-black text-slate-900 mb-2">
                      {activeIndustry.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
                      {activeIndustry.summary}
                    </p>

                    {/* Integrated Solution Modules */}
                    <div className="space-y-1.5 mb-6">
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                        Enterprise Architecture Modules:
                      </span>
                      {activeIndustry.solutions.map((sol, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">Tailored Global Runbooks</span>
                    <button
                      onClick={() => onOpenContact(`Industry Solutions: ${activeIndustry.name}`)}
                      className="btn-primary-gradient shimmer-sweep px-4 py-2 rounded-xl text-xs font-display font-bold uppercase tracking-wider text-white shadow-sm cursor-pointer"
                    >
                      Consult Industry Lead
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — GLOBAL COLLABORATION ("From Local Expertise to Global Impact")
          Vibrant 5-Stage Stepper: Pune/Mumbai -> Dubai/Singapore -> Worldwide Corridors
          ========================================================================= */}
      <section className="py-14 sm:py-16 relative overflow-hidden bg-gradient-to-b from-[#F0FDF4] via-slate-50 to-[#EFF6FF] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200 shadow-sm mb-3">
              <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
              <span>Geographic Collaboration Trajectory</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              From Local Expertise to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">Global Impact</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              A seamless progressive pathway transforming local engineering excellence into scalable worldwide enterprise value.
            </p>
          </div>

          {/* Desktop Horizontal Connected Flowchart */}
          <div className="relative mb-6">
            
            {/* Continuous Laser Connection Rail (Desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-slate-200 z-0 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                className="w-1/4 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            </div>

            {/* 5 Connected Step Nodes with Colorful Accents */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
              {collaborationSteps.map((step, idx) => {
                const isSelected = activeCollabStep === idx;

                const stepColors = [
                  'border-blue-400 bg-blue-50/40',
                  'border-amber-400 bg-amber-50/40',
                  'border-emerald-400 bg-emerald-50/40',
                  'border-purple-400 bg-purple-50/40',
                  'border-rose-400 bg-rose-50/40'
                ];

                return (
                  <motion.div
                    key={step.step}
                    onClick={() => setActiveCollabStep(idx)}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl p-5 border cursor-pointer transition-all duration-300 flex flex-col justify-between bg-white ${
                      isSelected
                        ? `shadow-lg scale-102 border-2 ${stepColors[idx % stepColors.length]}`
                        : 'border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Step Number Circle */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-black shadow-sm ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {step.step}
                        </div>
                        <span className="font-mono text-[9px] uppercase font-bold text-slate-500 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                          {step.badge}
                        </span>
                      </div>

                      <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">
                        {step.tag}
                      </span>
                      <h4 className="font-display text-base font-bold text-slate-900 mb-2 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-blue-600 font-semibold">
                      <span>Phase 0{idx + 1}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — FINAL CTA ("Think Global. Connect Better. Grow Together.")
          Vibrant Enterprise Gradient Card + Global Office Locations Ticker
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#0A2540] via-[#0052CC] to-[#00A3E0] shadow-2xl text-white text-center relative overflow-hidden">
            
            {/* Ambient glowing rings */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white/15 text-cyan-200 border border-white/20 shadow-sm mb-5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                <span>Global Partnership Gateway • Worldwide Hubs</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Think Global. Connect Better. <span className="text-cyan-200">Grow Together.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-100 font-sans leading-relaxed max-w-2xl mx-auto mb-6">
                Explore opportunities to connect with KNOOVIQ across our headquarters in Mumbai, regional delivery hubs in Pune & Bengaluru, and international partner gateways in Dubai & Singapore.
              </p>

              {/* Location Footprint Ticker */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs font-mono font-bold text-white">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">🇮🇳 Mumbai HQ</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">🇮🇳 Pune Hub</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">🇮🇳 Bengaluru Lab</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">🇦🇪 Dubai Gateway</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">🇸🇬 Singapore Desk</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => onOpenContact('Global Presence Advisory')}
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-blue-900 px-8 py-3.5 rounded-xl font-display text-xs font-extrabold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  to="/about/knooviq-connect"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center backdrop-blur-md"
                >
                  Explore KnoovIQ Connect
                </Link>
              </div>

              {/* Executive Reassurance Trust Bar */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-cyan-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  <span>Confidential Mutual NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-300" />
                  <span>&lt; 24h Executive Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  <span>Direct Solution Architect Access</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
