import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures every page navigation opens cleanly at the very top (Hero Section),
 * preventing routes from opening scrolled to the footer.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, search, key } = useLocation();

  useEffect(() => {
    // 1. Disable browser's automatic scroll restoration so React controls scroll exclusively
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTopForce = () => {
      // If Lenis smooth scroll is active, resize and force immediate scroll to top
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === 'function') {
        if (typeof lenis.resize === 'function') {
          lenis.resize();
        }
        lenis.scrollTo(0, { immediate: true, force: true });
      }

      // Native browser window & document scrolling
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Stage 1: Synchronous immediate scroll reset
    scrollToTopForce();

    // Stage 2: Next frame after initial DOM paint
    const rafId = requestAnimationFrame(() => {
      scrollToTopForce();
    });

    // Stage 3 & 4: Fallbacks for components or images that mount with layout shifts
    const t1 = setTimeout(scrollToTopForce, 40);
    const t2 = setTimeout(scrollToTopForce, 120);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, search, key]);

  return null;
};
