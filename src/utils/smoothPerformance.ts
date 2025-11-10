/**
 * Performance utilities for butter-smooth interactions
 */

/**
 * Throttle function for scroll events - ensures 60fps
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function for resize/research events
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

/**
 * Request animation frame wrapper for smooth animations
 */
export const raf = (callback: () => void): number => {
  return requestAnimationFrame(callback);
};

/**
 * Cancel animation frame wrapper
 */
export const cancelRaf = (id: number): void => {
  cancelAnimationFrame(id);
};

/**
 * Smooth scroll to element with offset
 */
export const smoothScrollTo = (
  element: HTMLElement | string,
  offset: number = 80,
  behavior: ScrollBehavior = 'smooth'
): void => {
  const targetElement =
    typeof element === 'string' ? document.querySelector(element) : element;

  if (!targetElement) return;

  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Lazy load images with intersection observer
 */
export const lazyLoadImage = (
  image: HTMLImageElement,
  src: string,
  options?: IntersectionObserverInit
): (() => void) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          image.src = src;
          image.classList.add('loaded');
          observer.unobserve(image);
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.01,
      ...options,
    }
  );

  observer.observe(image);

  return () => observer.unobserve(image);
};

/**
 * Preload critical resources
 */
export const preloadResource = (href: string, as: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

/**
 * Optimize scroll performance
 */
export const optimizeScrollPerformance = (): (() => void) => {
  let ticking = false;
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        lastScrollY = window.scrollY;
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * Enable GPU acceleration for element
 */
export const enableGPUAcceleration = (element: HTMLElement): void => {
  element.style.transform = 'translateZ(0)';
  element.style.willChange = 'transform';
  element.style.backfaceVisibility = 'hidden';
};

/**
 * Disable GPU acceleration for element
 */
export const disableGPUAcceleration = (element: HTMLElement): void => {
  element.style.transform = '';
  element.style.willChange = 'auto';
  element.style.backfaceVisibility = '';
};

/**
 * Request idle callback with fallback
 */
export const requestIdleCallback = (
  callback: () => void,
  options?: IdleRequestOptions
): number => {
  if ('requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback, options);
  } else {
    return setTimeout(callback, options?.timeout || 1) as any;
  }
};

/**
 * Cancel idle callback with fallback
 */
export const cancelIdleCallback = (id: number): void => {
  if ('cancelIdleCallback' in window) {
    (window as any).cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

/**
 * Measure performance of a function
 */
export const measurePerformance = <T extends (...args: any[]) => any>(
  func: T,
  label: string = 'Function'
): T => {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();
    if (process.env.NODE_ENV === 'development') {
      console.log(`${label} took ${end - start} milliseconds`);
    }
    return result;
  }) as T;
};

