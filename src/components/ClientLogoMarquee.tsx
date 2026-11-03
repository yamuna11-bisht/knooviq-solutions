import React from 'react';
import { Building2, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface ClientLogoItem {
  id: string;
  name: string;
  category: string;
  renderLogo: () => React.ReactNode;
}

const CLIENTS_LIST_ROW_1: ClientLogoItem[] = [
  {
    id: 'mahindra',
    name: 'Mahindra',
    category: 'Automotive & Farm',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 100 60" className="h-9 w-14 flex-shrink-0" fill="none">
          <ellipse cx="50" cy="30" rx="46" ry="26" stroke="#D32F2F" strokeWidth="4.5" fill="none" />
          <path d="M28 30 C36 18, 44 18, 50 30 C56 18, 64 18, 72 30" stroke="#D32F2F" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M35 34 C42 25, 47 25, 50 34 C53 25, 58 25, 65 34" stroke="#D32F2F" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <span className="font-display font-black text-lg tracking-tight text-[#D32F2F]">Mahindra</span>
      </div>
    ),
  },
  {
    id: 'tata',
    name: 'TATA Communications',
    category: 'Telecom & Digital Core',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-full bg-[#0052CC] flex items-center justify-center text-white font-bold text-xs shadow-sm flex-shrink-0">
          <span className="font-display tracking-widest font-black text-sm">T</span>
        </div>
        <div>
          <span className="font-display font-extrabold text-sm tracking-wider text-[#0052CC] block leading-none">TATA</span>
          <span className="text-[10px] font-mono font-bold tracking-tight text-slate-700 block mt-0.5">COMMUNICATIONS</span>
        </div>
      </div>
    ),
  },
  {
    id: 'adani',
    name: 'Adani Group',
    category: 'Energy & Infrastructure',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="relative h-9 w-9 flex-shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-sky-400 opacity-80" />
          <div className="h-6 w-6 rounded-full border-2 border-[#0052CC] border-t-transparent" />
          <div className="h-3 w-3 rounded-full bg-[#0A2540]" />
        </div>
        <span className="font-display font-black text-lg tracking-widest text-[#0A2540]">ADANI</span>
      </div>
    ),
  },
  {
    id: 'godrej',
    name: 'Godrej',
    category: 'Diversified Conglomerate',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <span className="font-serif italic font-black text-2xl tracking-tight text-[#9C27B0] drop-shadow-sm">
          Godrej
        </span>
      </div>
    ),
  },
  {
    id: 'ibm',
    name: 'IBM',
    category: 'Global Technology',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <span className="font-mono font-black text-2xl tracking-widest text-[#0062FF] border-y-2 border-[#0062FF] px-1">
          IBM
        </span>
      </div>
    ),
  },
  {
    id: 'fujitsu',
    name: 'Fujitsu',
    category: 'Enterprise IT Solutions',
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <span className="font-display font-black text-xl tracking-tight text-[#E53935]">
          FUJITSU
        </span>
        <span className="text-[#E53935] text-xl font-bold font-mono">∞</span>
      </div>
    ),
  },
  {
    id: 'pidilite',
    name: 'Pidilite',
    category: 'Adhesives & Chemicals',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#0052CC] via-amber-400 to-amber-300 flex items-center justify-center shadow-sm">
          <div className="h-3.5 w-3.5 rounded-full bg-white shadow-inner" />
        </div>
        <span className="font-display font-black text-lg text-[#0052CC] tracking-tight">Pidilite</span>
      </div>
    ),
  },
  {
    id: 'welspun',
    name: 'Welspun',
    category: 'Steel, Pipes & Textiles',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="text-center">
          <span className="font-display font-black text-sm tracking-widest text-slate-900 block leading-none">WELSPUN</span>
          <span className="text-cyan-500 font-black text-xs tracking-widest">~ W ~</span>
        </div>
      </div>
    ),
  },
  {
    id: 'pfizer',
    name: 'Pfizer',
    category: 'Biopharmaceuticals',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-[#0052CC] flex items-center justify-center shadow-sm">
          <span className="text-white font-serif italic font-black text-sm">Pf</span>
        </div>
        <span className="font-serif italic font-bold text-xl text-[#0052CC] tracking-tight">Pfizer</span>
      </div>
    ),
  },
  {
    id: 'ceat',
    name: 'CEAT',
    category: 'Automotive Tires',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="font-display font-black text-2xl tracking-tighter text-[#0052CC]">
          C<span className="text-orange-500">E</span>AT
        </span>
      </div>
    ),
  },
  {
    id: 'bajaj',
    name: 'Bajaj',
    category: 'Automotive Manufacturing',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-[#0052CC] text-white flex items-center justify-center font-bold text-xs shadow-sm">
          <span className="font-display font-black">B</span>
        </div>
        <span className="font-display font-black text-xl text-[#0052CC] tracking-wider">BAJAJ</span>
      </div>
    ),
  },
  {
    id: 'total',
    name: 'TotalEnergies',
    category: 'Global Multi-Energy',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-full border-2 border-red-500 border-t-amber-400 border-r-blue-500 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-red-600" />
        </div>
        <span className="font-display font-black text-lg text-red-600 tracking-tight">TOTAL</span>
      </div>
    ),
  },
  {
    id: 'hul',
    name: 'Hindustan Unilever Limited',
    category: 'Consumer FMCG',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 border-2 border-[#0052CC] rounded-b-xl flex items-center justify-center text-[#0052CC] font-serif font-black text-xs shadow-sm">
          U
        </div>
        <div>
          <span className="font-serif font-bold text-xs text-[#0052CC] block leading-none">Hindustan Unilever</span>
          <span className="text-[9px] font-sans text-slate-500 font-semibold block">Limited</span>
        </div>
      </div>
    ),
  },
  {
    id: 'lodha',
    name: 'Lodha Group',
    category: 'Real Estate & Infrastructure',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5 items-end h-6">
          <div className="w-1.5 h-3 bg-amber-600 rounded-xs" />
          <div className="w-1.5 h-4.5 bg-amber-600 rounded-xs" />
          <div className="w-1.5 h-6 bg-amber-600 rounded-xs" />
        </div>
        <span className="font-display font-black text-lg text-amber-700 tracking-wider">LODHA</span>
      </div>
    ),
  },
  {
    id: 'sterlite',
    name: 'Sterlite Industries',
    category: 'Metals & Mining',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full border border-slate-700 bg-slate-100 flex items-center justify-center font-mono font-bold text-xs text-slate-900">
          ⚙
        </div>
        <span className="font-display font-extrabold text-sm text-slate-900 tracking-tight">STERLITE</span>
      </div>
    ),
  },
  {
    id: 'pepsi',
    name: 'PepsiCo',
    category: 'Global Beverages & Foods',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-b from-red-600 via-white to-blue-600 border border-slate-200 shadow-sm" />
        <span className="font-display font-extrabold text-lg text-blue-700 tracking-tight">pepsi</span>
      </div>
    ),
  },
  {
    id: 'lupin',
    name: 'Lupin Pharmaceuticals',
    category: 'Global Healthcare',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs">
          ✦
        </div>
        <span className="font-display font-black text-lg text-slate-900 tracking-widest">LUPIN</span>
      </div>
    ),
  },
  {
    id: 'blue-star',
    name: 'Blue Star',
    category: 'Commercial Air Conditioning',
    renderLogo: () => (
      <div className="flex items-center gap-2 border border-[#0052CC]/40 rounded-lg px-2.5 py-1">
        <span className="text-[#0052CC] font-bold text-sm">★</span>
        <span className="font-display font-black text-xs text-[#0052CC] tracking-wider">BLUE STAR</span>
      </div>
    ),
  },
  {
    id: 'mcgm',
    name: 'Municipal Corp of Greater Mumbai',
    category: 'Public Governance & Smart City',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full border-2 border-amber-600 bg-amber-50 flex items-center justify-center text-amber-800 font-bold text-xs">
          🏛
        </div>
        <div>
          <span className="font-display font-bold text-xs text-slate-900 block leading-tight">MCGM</span>
          <span className="text-[9px] text-slate-500 font-sans block">Greater Mumbai</span>
        </div>
      </div>
    ),
  }
];

const CLIENTS_LIST_ROW_2: ClientLogoItem[] = [
  {
    id: 'honeywell-intermec',
    name: 'Intermec by Honeywell',
    category: 'Industrial Automation & AIDC',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="italic font-display font-black text-lg text-[#0052CC]">
          Intermec
        </div>
        <span className="text-[9px] font-mono text-red-600 font-bold">by Honeywell</span>
      </div>
    ),
  },
  {
    id: 'alkem',
    name: 'Alkem Laboratories',
    category: 'Healthcare & Formulations',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 border-2 border-[#0052CC] rotate-45 flex items-center justify-center shadow-xs">
          <span className="-rotate-45 font-display font-bold text-xs text-[#0052CC]">a</span>
        </div>
        <span className="font-display font-black text-base text-[#0052CC] tracking-wider">ALKEM</span>
      </div>
    ),
  },
  {
    id: 'berger',
    name: 'Berger Paints',
    category: 'Paints & Coatings',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-indigo-500 via-rose-500 to-amber-400 p-0.5 flex items-center justify-center text-white text-[10px] font-bold">
          B
        </div>
        <span className="font-serif italic font-bold text-lg text-indigo-900">Berger</span>
      </div>
    ),
  },
  {
    id: 'viraj',
    name: 'Viraj Profiles Limited',
    category: 'Stainless Steel & Alloys',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="text-orange-600 font-black text-lg font-display">❯❯</div>
        <div>
          <span className="font-display font-black text-base text-orange-600 block leading-tight">VIRAJ</span>
          <span className="text-[9px] font-mono text-slate-500 block">Profiles Limited</span>
        </div>
      </div>
    ),
  },
  {
    id: 'nilkamal',
    name: 'Nilkamal',
    category: 'Plastics & Furniture',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <span className="text-cyan-600 text-lg">🪷</span>
        <span className="font-display font-black text-lg text-[#0052CC] tracking-tight">Nilkamal</span>
      </div>
    ),
  },
  {
    id: 'solar',
    name: 'Solar Industries',
    category: 'Industrial Explosives & Defense',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 bg-red-700 text-white rounded-md flex items-center justify-center font-display font-black text-sm">
          S
        </div>
        <span className="font-display font-black text-base text-red-700 tracking-widest">SOLAR</span>
      </div>
    ),
  },
  {
    id: 'reliance-power',
    name: 'Reliance Power',
    category: 'Power & Utilities',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 border-t-4 border-b-4 border-red-600 flex items-center justify-center">
          <span className="text-cyan-600 font-black text-xs">▲</span>
        </div>
        <div>
          <span className="font-display font-black text-xs text-red-600 tracking-wider block leading-tight">RELIANCE</span>
          <span className="text-[9px] font-sans font-semibold text-slate-600 block">Power</span>
        </div>
      </div>
    ),
  },
  {
    id: 'provogue',
    name: 'Provogue',
    category: 'Fashion & Retail',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="font-display font-black text-base tracking-[0.2em] text-slate-900">PROVOGUE</span>
      </div>
    ),
  },
  {
    id: 'prozone',
    name: 'Prozone Malls',
    category: 'Commercial Real Estate',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 flex items-center justify-center text-white text-[10px]">
          ☼
        </div>
        <span className="font-display font-black text-base text-red-600 tracking-tight">PROZONE</span>
      </div>
    ),
  },
  {
    id: 'astec',
    name: 'Astec LifeSciences',
    category: 'Agrochemicals & Specialties',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 bg-teal-700 text-white rounded-md flex items-center justify-center font-bold text-xs">
          ▲
        </div>
        <span className="font-display font-black text-base text-teal-800 tracking-widest">ASTEC</span>
      </div>
    ),
  },
  {
    id: 'loha',
    name: 'Loha Steel',
    category: 'Structural Steel Doors',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="font-display font-black text-lg text-slate-900 tracking-widest border-b-2 border-slate-900">
          LOHA
        </span>
      </div>
    ),
  },
  {
    id: 'oriental',
    name: 'Oriental Belts',
    category: 'Heavy Conveyor Systems',
    renderLogo: () => (
      <div className="border border-red-600 rounded-full px-3 py-1 flex items-center">
        <span className="font-display font-black text-xs text-red-600 tracking-wider">ORIENTAL</span>
      </div>
    ),
  },
  {
    id: 'mirnah',
    name: 'Mirnah Technology',
    category: 'Route Accounting & Logistics',
    renderLogo: () => (
      <div className="flex items-center gap-1">
        <span className="font-serif italic font-bold text-lg text-emerald-700">mirnah</span>
        <span className="text-[8px] font-mono text-red-500 block font-bold">TECH</span>
      </div>
    ),
  },
  {
    id: 'jyoti',
    name: 'Jyoti Plastics',
    category: 'Precision Moldings & Engineering',
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <span className="font-serif font-black text-lg text-[#C2185B]">Jyoti</span>
        <span className="text-[9px] font-mono text-slate-500 font-bold">Plastics</span>
      </div>
    ),
  },
  {
    id: 'kama',
    name: 'Kama Schachter',
    category: 'Luxury Jewelry & Retail',
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-center">
        <span className="text-amber-600 text-sm">👑</span>
        <span className="font-serif font-bold text-xs tracking-widest text-amber-900">KAMA SCHACHTER</span>
      </div>
    ),
  },
  {
    id: 'rp-tech',
    name: 'Rashi Peripherals (RP tech)',
    category: 'IT Distribution Titan',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-blue-700 text-white flex items-center justify-center text-[10px] font-bold">
          RP
        </div>
        <span className="font-display font-bold text-xs text-slate-900">RP TECH</span>
      </div>
    ),
  },
  {
    id: 'premier',
    name: 'Premier Engineering',
    category: 'Automotive & Industrial',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <span className="font-display font-black text-base text-blue-900 tracking-widest">PREMIER</span>
      </div>
    ),
  },
  {
    id: 'sanathan',
    name: 'Sanathan Textiles',
    category: 'Yarns & Synthetic Fibers',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 text-base">🧬</span>
        <div>
          <span className="font-display font-bold text-xs text-slate-900 block leading-tight">Sanathan</span>
          <span className="text-[8px] font-sans text-slate-500 block">Textiles</span>
        </div>
      </div>
    ),
  },
  {
    id: 'savera',
    name: 'Savera Group',
    category: 'Hospitality & Industrial',
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <span className="font-serif italic font-bold text-lg text-red-600">savera</span>
        <span className="text-orange-500 text-xs">~</span>
      </div>
    ),
  }
];

// Combined comprehensive list of all enterprise clients in a single continuous track
const ALL_CLIENTS: ClientLogoItem[] = [...CLIENTS_LIST_ROW_1, ...CLIENTS_LIST_ROW_2];

export const ClientLogoMarquee: React.FC<{
  title?: string;
  subtitle?: string;
  description?: string;
  badge1?: string;
  badge2?: string;
  badge3?: string;
  sectorsList?: string[];
  className?: string;
}> = ({
  className = ""
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClickPaused, setIsClickPaused] = React.useState(false);
  const clickTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Pause on click for exactly 2 seconds (2000ms), then automatically resume scrolling
  // If another client is clicked during the pause, cleanly restart the 2-second pause timer
  const handleLogoClick = (e: React.MouseEvent, client: ClientLogoItem) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }

    setIsClickPaused(true);

    clickTimeoutRef.current = setTimeout(() => {
      setIsClickPaused(false);
      clickTimeoutRef.current = null;
    }, 2000);
  };

  // Keyboard accessibility (Enter / Space)
  const handleLogoKeyDown = (e: React.KeyboardEvent, client: ClientLogoItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLogoClick(e as unknown as React.MouseEvent, client);
    }
  };

  // Cleanup active timer on unmount
  React.useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  // Combined pause state: active while mouse hovers OR while 2-second click-pause is running
  const isPaused = isHovered || isClickPaused;

  const renderClientCard = (client: ClientLogoItem, key: string, isDuplicate = false) => {
    return (
      <div
        key={key}
        role="button"
        tabIndex={0}
        aria-label={`${client.name} - ${client.category}`}
        aria-hidden={isDuplicate ? undefined : undefined}
        onClick={(e) => handleLogoClick(e, client)}
        onKeyDown={(e) => handleLogoKeyDown(e, client)}
        className="bg-white border border-slate-100 hover:border-slate-300 rounded-2xl px-6 py-3.5 flex flex-col items-center justify-between min-w-[240px] sm:min-w-[260px] h-[96px] flex-shrink-0 transition-colors duration-200 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.25)] hover:shadow-xl group/card relative overflow-hidden cursor-pointer select-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none ring-0"
      >
        <div className="h-11 flex items-center justify-center w-full px-2 pointer-events-none">
          {client.renderLogo()}
        </div>

        {/* Clean Category Label */}
        <div className="flex items-center justify-center w-full pt-1.5 border-t border-slate-100 pointer-events-none">
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tight truncate text-center">
            {client.category}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className={`py-6 sm:py-8 relative overflow-hidden bg-gradient-to-r from-[#061224] via-[#0A1931] to-[#002B5B] border-t border-b border-sky-500/20 ${className}`}>
      {/* Background Architectural Dot Matrix Grid Pattern (Image 1 Color Match) */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Dual Soft Ambient Colored Spotlights */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[350px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Single Unified Continuous Horizontal Rotating Track: All Clients in One Part */}
      <div
        className="relative w-full overflow-hidden py-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Crisp Edge Soft Fade (Matching the Deep Dark Navy Blue Background) */}
        <div className="absolute top-0 left-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-[#061224] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-[#002B5B] to-transparent z-20 pointer-events-none" />

        {/* Single Seamless Row: Every Client Scrolling in One Smooth Continuous Loop */}
        <div className="flex overflow-hidden py-2">
          <div
            className="animate-rotate-ltr-all flex items-center will-change-transform"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {/* Primary Track with all 38 clients */}
            <div className="flex items-center gap-6 pr-6 flex-shrink-0">
              {ALL_CLIENTS.map((client, idx) => renderClientCard(client, `primary-${client.id}-${idx}`))}
            </div>
            {/* Seamless Infinite Loop Duplicate Track with all 38 clients */}
            <div className="flex items-center gap-6 pr-6 flex-shrink-0" aria-hidden="true">
              {ALL_CLIENTS.map((client, idx) => renderClientCard(client, `duplicate-${client.id}-${idx}`, true))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
