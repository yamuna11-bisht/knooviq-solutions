import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseAutoRotateOptions {
  itemCount: number;
  intervalMs?: number;
  pauseOnInteractionMs?: number;
  initialIndex?: number;
}

export function useAutoRotate({
  itemCount,
  intervalMs = 1000,
  pauseOnInteractionMs = 5000,
  initialIndex = 0
}: UseAutoRotateOptions) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isClickPaused, setIsClickPaused] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Called when user clicks an item - guarantees 5s wait before resuming
  const handleSelect = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsClickPaused(true);

    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }

    pauseTimerRef.current = setTimeout(() => {
      setIsClickPaused(false);
      pauseTimerRef.current = null;
    }, pauseOnInteractionMs);
  }, [pauseOnInteractionMs]);

  // Hover handlers
  const handleMouseEnter = useCallback(() => {
    setIsHoverPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHoverPaused(false);
  }, []);

  // Auto-advance effect
  useEffect(() => {
    if (isClickPaused || isHoverPaused || itemCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isClickPaused, isHoverPaused, itemCount, intervalMs]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
    };
  }, []);

  return {
    currentIndex,
    setCurrentIndex,
    handleSelect,
    isClickPaused,
    isHoverPaused,
    handleMouseEnter,
    handleMouseLeave
  };
}
