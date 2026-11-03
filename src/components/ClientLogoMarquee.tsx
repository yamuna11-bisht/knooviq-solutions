import React from 'react';

export interface ClientLogoItem {
  id: string;
  name: string;
  category: string;
  logoSrc: string;
}

// 40 Authentic enterprise clients using exact original logo assets from reference image
export const ALL_CLIENTS: ClientLogoItem[] = [
  // ── ROW 1 ──
  {
    id: 'mahindra',
    name: 'Mahindra',
    category: 'Automotive & Farm Equipment',
    logoSrc: '/images/clients/mahindra.png',
  },
  {
    id: 'mcgm',
    name: 'Municipal Corporation of Greater Mumbai',
    category: 'Public Administration & Smart City',
    logoSrc: '/images/clients/mcgm.png',
  },
  {
    id: 'intermec-honeywell',
    name: 'Intermec by Honeywell',
    category: 'Barcode & RFID Automation',
    logoSrc: '/images/clients/intermec-honeywell.png',
  },
  {
    id: 'godrej',
    name: 'Godrej',
    category: 'Diversified Conglomerate',
    logoSrc: '/images/clients/godrej.png',
  },
  {
    id: 'mimah',
    name: 'mimah Technology Systems',
    category: 'Enterprise Technology Solutions',
    logoSrc: '/images/clients/mimah.png',
  },

  // ── ROW 2 ──
  {
    id: 'provogue',
    name: 'Provogue',
    category: 'Fashion & Retail',
    logoSrc: '/images/clients/provogue.png',
  },
  {
    id: 'prozone',
    name: 'Prozone',
    category: 'Retail & Commercial Real Estate',
    logoSrc: '/images/clients/prozone.png',
  },
  {
    id: 'solar',
    name: 'Solar',
    category: 'Industrial & Energy Solutions',
    logoSrc: '/images/clients/solar.png',
  },
  {
    id: 'sterlite',
    name: 'Sterlite Industries',
    category: 'Metals & Mining Infrastructure',
    logoSrc: '/images/clients/sterlite.png',
  },
  {
    id: 'tata-communications',
    name: 'Tata Communications',
    category: 'Global Telecom & Digital Core',
    logoSrc: '/images/clients/tata-communications.png',
  },

  // ── ROW 3 ──
  {
    id: 'total',
    name: 'TotalEnergies',
    category: 'Global Multi-Energy & Oil',
    logoSrc: '/images/clients/total.png',
  },
  {
    id: 'viraj',
    name: 'Viraj Profiles Limited',
    category: 'Stainless Steel Manufacturing',
    logoSrc: '/images/clients/viraj.png',
  },
  {
    id: 'welspun',
    name: 'Welspun',
    category: 'Steel, Pipes & Home Textiles',
    logoSrc: '/images/clients/welspun.png',
  },
  {
    id: 'loha',
    name: 'Loha',
    category: 'Steel & Construction Materials',
    logoSrc: '/images/clients/loha.png',
  },
  {
    id: 'adani',
    name: 'Adani',
    category: 'Energy & Infrastructure',
    logoSrc: '/images/clients/adani.png',
  },

  // ── ROW 4 ──
  {
    id: 'alkem',
    name: 'Alkem Laboratories',
    category: 'Pharmaceuticals & Formulations',
    logoSrc: '/images/clients/alkem.png',
  },
  {
    id: 'berger',
    name: 'Berger Paints',
    category: 'Paints & Specialty Coatings',
    logoSrc: '/images/clients/berger.png',
  },
  {
    id: 'astec',
    name: 'Astec LifeSciences',
    category: 'Agrochemicals & Intermediates',
    logoSrc: '/images/clients/astec.png',
  },
  {
    id: 'ceat',
    name: 'CEAT',
    category: 'Automotive Tyres',
    logoSrc: '/images/clients/ceat.png',
  },
  {
    id: 'bajaj',
    name: 'Bajaj',
    category: 'Automotive & Manufacturing',
    logoSrc: '/images/clients/bajaj.png',
  },

  // ── ROW 5 ──
  {
    id: 'oriental',
    name: 'Oriental Insurance',
    category: 'General Insurance & Protection',
    logoSrc: '/images/clients/oriental.png',
  },
  {
    id: 'fujitsu',
    name: 'Fujitsu',
    category: 'Enterprise IT Solutions',
    logoSrc: '/images/clients/fujitsu.png',
  },
  {
    id: 'ibm',
    name: 'IBM',
    category: 'Enterprise Cloud & Cognitive AI',
    logoSrc: '/images/clients/ibm.png',
  },
  {
    id: 'pidilite',
    name: 'Pidilite',
    category: 'Adhesives & Consumer Chemicals',
    logoSrc: '/images/clients/pidilite.png',
  },
  {
    id: 'jyoti',
    name: 'Jyoti',
    category: 'Engineering & Power Equipment',
    logoSrc: '/images/clients/jyoti.png',
  },

  // ── ROW 6 ──
  {
    id: 'kama-schachter',
    name: 'Kama Schachter',
    category: 'Diamond Jewellery Manufacturing',
    logoSrc: '/images/clients/kama-schachter.png',
  },
  {
    id: 'lodha',
    name: 'Lodha Group',
    category: 'Real Estate & Smart Communities',
    logoSrc: '/images/clients/lodha.png',
  },
  {
    id: 'lupin',
    name: 'Lupin',
    category: 'Global Healthcare & Bio-pharma',
    logoSrc: '/images/clients/lupin.png',
  },
  {
    id: 'nilkamal',
    name: 'Nilkamal',
    category: 'Moulded Furniture & Logistics',
    logoSrc: '/images/clients/nilkamal.png',
  },
  {
    id: 'pepsi',
    name: 'PepsiCo',
    category: 'Global Food & Beverages',
    logoSrc: '/images/clients/pepsi.png',
  },

  // ── ROW 7 ──
  {
    id: 'pfizer',
    name: 'Pfizer',
    category: 'Global Biopharmaceuticals',
    logoSrc: '/images/clients/pfizer.png',
  },
  {
    id: 'premier',
    name: 'Premier',
    category: 'Automotive & Heavy Engineering',
    logoSrc: '/images/clients/premier.png',
  },
  {
    id: 'promart',
    name: 'Promart',
    category: 'Retail & Value Supermarkets',
    logoSrc: '/images/clients/promart.png',
  },
  {
    id: 'rashi-peripherals',
    name: 'Rashi Peripherals',
    category: 'ICT Distribution & Devices',
    logoSrc: '/images/clients/rashi-peripherals.png',
  },
  {
    id: 'reliance-power',
    name: 'Reliance Power',
    category: 'Power Generation & Utilities',
    logoSrc: '/images/clients/reliance-power.png',
  },

  // ── ROW 8 ──
  {
    id: 'sanathan',
    name: 'Sanathan Textiles',
    category: 'Yarn & Global Textiles',
    logoSrc: '/images/clients/sanathan.png',
  },
  {
    id: 'savera',
    name: 'Savera Hotels',
    category: 'Hospitality & Leisure Services',
    logoSrc: '/images/clients/savera.png',
  },
  {
    id: 'hindustan-unilever',
    name: 'Hindustan Unilever',
    category: 'Consumer FMCG & Personal Care',
    logoSrc: '/images/clients/hindustan-unilever.png',
  },
  {
    id: 'tata',
    name: 'TATA Communications',
    category: 'Enterprise Telecom & Connectivity',
    logoSrc: '/images/clients/tata.png',
  },
  {
    id: 'blue-star',
    name: 'Blue Star',
    category: 'Air Conditioning & Refrigeration',
    logoSrc: '/images/clients/blue-star.png',
  },
];

// Backwards-compatibility aliases
export const CLIENTS_LIST_ROW_1 = ALL_CLIENTS.slice(0, 20);
export const CLIENTS_LIST_ROW_2 = ALL_CLIENTS.slice(20, 40);

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
  const handleLogoClick = (_e: React.MouseEvent, _client: ClientLogoItem) => {
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
        aria-hidden={isDuplicate ? true : undefined}
        onClick={(e) => handleLogoClick(e, client)}
        onKeyDown={(e) => handleLogoKeyDown(e, client)}
        className="bg-white border border-slate-200/90 hover:border-sky-400 rounded-2xl px-6 py-3.5 flex flex-col items-center justify-between min-w-[250px] sm:min-w-[275px] h-[122px] flex-shrink-0 transition-all duration-200 shadow-[0_4px_18px_-2px_rgba(0,0,0,0.22)] hover:shadow-2xl hover:scale-[1.02] group/card relative overflow-hidden cursor-pointer select-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none ring-0"
      >
        {/* Exact Authentic Logo Image Preserving Colors, Proportions & Clear Visible Text */}
        <div className="h-16 flex items-center justify-center w-full px-2 py-1 pointer-events-none transition-transform duration-200 group-hover/card:scale-105">
          <img
            src={client.logoSrc}
            alt={client.name}
            className="max-h-15 sm:max-h-16 max-w-[170px] w-auto h-auto object-contain select-none"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Crisp, High-Contrast Category Label */}
        <div className="flex items-center justify-center w-full pt-2 border-t border-slate-100 pointer-events-none">
          <span className="text-[11.5px] font-sans font-bold text-slate-600 tracking-tight truncate text-center">
            {client.category}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className={`py-6 sm:py-8 relative overflow-hidden bg-gradient-to-r from-[#061224] via-[#0A1931] to-[#002B5B] border-t border-b border-sky-500/20 ${className}`}>
      {/* Background Architectural Dot Matrix Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Dual Soft Ambient Colored Spotlights */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[350px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Single Unified Continuous Horizontal Rotating Track: All 40 Clients */}
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
            {/* Primary Track with all 40 authentic clients */}
            <div className="flex items-center gap-6 pr-6 flex-shrink-0">
              {ALL_CLIENTS.map((client, idx) => renderClientCard(client, `primary-${client.id}-${idx}`))}
            </div>
            {/* Seamless Infinite Loop Duplicate Track with all 40 authentic clients */}
            <div className="flex items-center gap-6 pr-6 flex-shrink-0" aria-hidden="true">
              {ALL_CLIENTS.map((client, idx) => renderClientCard(client, `duplicate-${client.id}-${idx}`, true))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
