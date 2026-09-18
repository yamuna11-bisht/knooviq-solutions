import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Award, 
  Sparkles, 
  Globe2, 
  TrendingUp, 
  PhoneCall, 
  MapPin,
  ChevronRight,
  Building2
} from 'lucide-react';

export const ABOUT_TABS = [
  { path: '/about/the-knooviq-story', altPath: '/about/story', label: 'The KnoovIQ Story', icon: BookOpen },
  { path: '/about/visionary-leadership', altPath: '/about/leadership', label: 'Visionary Leadership', icon: Award },
  { path: '/about/digital-sap-excellence', altPath: '/about/excellence', label: 'Digital & SAP Excellence', icon: Sparkles },
  { path: '/about/our-global-network', altPath: '/about/network', label: 'Our Global Network', icon: Globe2 },
  { path: '/about/grow-with-us', altPath: '/about/grow', label: 'Grow With Us', icon: TrendingUp },
  { path: '/about/knooviq-connect', altPath: '/about/connect', label: 'KnoovIQ Connect', icon: PhoneCall },
  { path: '/about/global-presence', altPath: '/about/presence', label: 'Global Presence', icon: MapPin },
];

export const AboutSubnav: React.FC<{ activeTabTitle?: string }> = ({ activeTabTitle }) => {
  const location = useLocation();

  const handleTabClick = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-xl border-y border-slate-200/90 py-2 sm:py-2.5 shadow-[0_4px_16px_-4px_rgba(10,37,64,0.06)] transition-colors duration-300 overflow-hidden">
      {/* Refined Edge Border Accents */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-slate-200/90 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-slate-200/90 pointer-events-none" />

      <div className="relative w-full overflow-hidden">
        
        {/* Frosted Edge Blur Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Continuous Left-to-Right Rotating Animated Track */}
        <div className="animate-rotate-ltr flex items-center gap-4 sm:gap-6 lg:gap-7 py-0.5 px-6">
          {[...ABOUT_TABS, ...ABOUT_TABS].map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = location.pathname === tab.path || location.pathname === tab.altPath;

            return (
              <Link
                key={`${tab.path}-${idx}`}
                to={tab.path}
                onClick={handleTabClick}
                className={`group relative flex items-center gap-2.5 px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 font-display flex-shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#0A2540] text-white shadow-md border border-[#0A2540] scale-105'
                    : 'bg-white text-slate-700 hover:text-[#0A2540] hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#0A2540]/40 hover:shadow-md hover:scale-105'
                }`}
              >
                {/* Compact Icon Container Tile */}
                <div className={`flex items-center justify-center h-6 w-6 rounded-lg transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'bg-slate-100 text-[#0A2540] border border-slate-200 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540]'
                }`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>

                {/* Label */}
                <span className="tracking-tight text-xs font-bold">{tab.label}</span>

                {/* Active Pulsing Indicator Dot */}
                {isActive && (
                  <span className="relative flex h-1.5 w-1.5 ml-0.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                  </span>
                )}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};
