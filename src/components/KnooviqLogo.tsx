import React from 'react';

interface KnooviqLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const KnooviqLogo: React.FC<KnooviqLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Height sizing for logo image
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  }[size];

  return (
    <div className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      {/* Light Mode: Transparent Official Logo */}
      <img
        src="/knooviq-logo-transparent.png"
        alt="KNOOVIQ INDUSTRIES PVT LTD"
        className={`${heightClass} w-auto object-contain block dark:hidden`}
        loading="eager"
      />

      {/* Dark Mode: High-Contrast Transparent Official Logo */}
      <img
        src="/knooviq-logo-darkmode.png"
        alt="KNOOVIQ INDUSTRIES PVT LTD"
        className={`${heightClass} w-auto object-contain hidden dark:block`}
        loading="eager"
      />
    </div>
  );
};
