import React from 'react';

interface KnooviqLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  forceDark?: boolean;
}

export const KnooviqLogo: React.FC<KnooviqLogoProps> = ({
  className = '',
  size = 'md',
  forceDark = false,
}) => {
  // Height sizing for logo image
  const heightClass = {
    sm: 'h-9 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  }[size];

  return (
    <div className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      {forceDark ? (
        <img
          src="/knooviq-logo-darkmode.png"
          alt="KNOOVIQ INDUSTRIES PVT LTD"
          className={`${heightClass} w-auto object-contain block`}
          loading="eager"
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
