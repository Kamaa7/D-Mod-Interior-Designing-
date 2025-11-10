// Advanced prefetching utilities for faster navigation

/**
 * Prefetch a route when user hovers over a link
 */
export const prefetchRoute = (path: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  link.as = 'document';
  document.head.appendChild(link);
};

/**
 * Prefetch critical images
 */
export const prefetchImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = src;
  link.as = 'image';
  document.head.appendChild(link);
};

/**
 * Prefetch multiple images
 */
export const prefetchImages = (images: string[]) => {
  images.forEach(prefetchImage);
};

/**
 * Preload critical resources
 */
export const preloadResource = (href: string, as: 'style' | 'script' | 'font' | 'image') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
};

/**
 * Lazy load images on scroll
 */
export const observeImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Prefetch routes on link hover
 */
export const enableLinkPrefetching = () => {
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href && link.origin === window.location.origin) {
      prefetchRoute(link.pathname);
    }
  });
};

/**
 * Optimize third-party scripts
 */
export const loadScriptAsync = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
};

/**
 * Defer non-critical CSS
 */
export const loadCSSAsync = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  document.head.appendChild(link);
};

/**
 * Detect slow network and adjust quality
 */
export const isSlowNetwork = (): boolean => {
  if ('connection' in navigator) {
    const conn = (navigator as any).connection;
    return conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g' || conn?.saveData;
  }
  return false;
};

/**
 * Get optimized image URL based on device pixel ratio and network
 */
export const getOptimizedImageUrl = (src: string, width: number): string => {
  const dpr = window.devicePixelRatio || 1;
  const slowNetwork = isSlowNetwork();
  
  // Reduce quality on slow networks
  const quality = slowNetwork ? 60 : 80;
  const actualWidth = slowNetwork ? width : Math.round(width * dpr);
  
  // If using image CDN, append parameters
  // Example: return `${src}?w=${actualWidth}&q=${quality}&auto=format`;
  
  return src;
};

/**
 * Initialize all performance optimizations
 */
export const initPerformanceOptimizations = () => {
  // Enable link prefetching on hover
  enableLinkPrefetching();
  
  // Observe and lazy load images
  observeImages();
  
  // Prefetch critical routes
  const criticalRoutes = ['/services', '/portfolio', '/contact'];
  setTimeout(() => {
    criticalRoutes.forEach(prefetchRoute);
  }, 3000);
  
  // Prefetch hero images
  const heroImages = [
    '/lovable-uploads/Gemini_Generated_Image_jppmrpjppmrpjppm.png',
  ];
  setTimeout(() => {
    prefetchImages(heroImages);
  }, 2000);
};

