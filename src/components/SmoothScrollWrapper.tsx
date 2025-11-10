import React, { useEffect, useCallback } from 'react';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  // Throttle scroll handler with requestAnimationFrame for 60fps
  const handleScroll = useCallback(() => {
    // This will be handled by CSS and passive listeners
  }, []);

  useEffect(() => {
    // Enable smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    const handleLinkClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const href = link.getAttribute('href');
      
      if (href && href !== '#') {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          // Use smooth scrollIntoView with proper offset
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick, { passive: false });
    });

    // Optimize scroll performance with passive listeners
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    const optimizedScrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Update scroll position tracking
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    // Optimize wheel events for smooth scrolling
    const wheelHandler = (e: WheelEvent) => {
      // Let browser handle smooth scrolling naturally
    };
    window.addEventListener('wheel', wheelHandler, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
      window.removeEventListener('wheel', wheelHandler);
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="smooth-scroll gpu-accelerated" style={{ willChange: 'scroll-position' }}>
      {children}
    </div>
  );
};

export default React.memo(SmoothScrollWrapper);
