import React, { useEffect, useRef, useCallback } from 'react';

/**
 * Hook to measure and optimize component render performance
 */
export const usePerformance = (componentName: string, enabled = false) => {
  const renderCount = useRef(0);
  const renderTimes = useRef<number[]>([]);
  const lastRenderTime = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    renderCount.current += 1;
    const currentTime = performance.now();
    
    if (lastRenderTime.current > 0) {
      const renderTime = currentTime - lastRenderTime.current;
      renderTimes.current.push(renderTime);
      
      // Log slow renders (> 16ms for 60fps)
      if (renderTime > 16) {
        console.warn(
          `[Performance] ${componentName} rendered slowly: ${renderTime.toFixed(2)}ms`
        );
      }
    }
    
    lastRenderTime.current = currentTime;

    // Log summary every 10 renders
    if (renderCount.current % 10 === 0) {
      const avgRenderTime = 
        renderTimes.current.reduce((a, b) => a + b, 0) / renderTimes.current.length;
      console.log(
        `[Performance] ${componentName} - Renders: ${renderCount.current}, Avg: ${avgRenderTime.toFixed(2)}ms`
      );
    }
  });
};

/**
 * Hook to debounce expensive operations
 */
export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

/**
 * Hook to throttle expensive operations
 */
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  const inThrottle = useRef(false);
  const lastRan = useRef(Date.now());

  return useCallback(
    (...args: Parameters<T>) => {
      if (!inThrottle.current) {
        callback(...args);
        lastRan.current = Date.now();
        inThrottle.current = true;
        setTimeout(() => {
          inThrottle.current = false;
        }, limit);
      }
    },
    [callback, limit]
  );
};

/**
 * Hook to detect if component is in viewport
 */
export const useInViewport = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const [isInViewport, setIsInViewport] = React.useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInViewport;
};

/**
 * Hook to prefetch data on component mount
 */
export const usePrefetch = (
  prefetchFn: () => Promise<void>,
  delay = 0
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      prefetchFn();
    }, delay);

    return () => clearTimeout(timer);
  }, [prefetchFn, delay]);
};

/**
 * Hook to detect idle time for background tasks
 */
export const useIdleCallback = (
  callback: () => void,
  options?: IdleRequestOptions
) => {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(callback, options);
      return () => cancelIdleCallback(id);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timeout = setTimeout(callback, 1);
      return () => clearTimeout(timeout);
    }
  }, [callback, options]);
};

// Re-export useState for convenience
export { useState } from 'react';

