import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { announcePageChange, manageFocusOnRouteChange } from '@/utils/accessibility';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);

    // Smooth scroll to top on route change with requestAnimationFrame
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Announce route change to screen readers and manage focus
    const pageName = location.pathname === '/' 
      ? 'Home' 
      : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2);
    
    // Use requestIdleCallback for non-critical accessibility updates
    const announceChange = () => {
      announcePageChange(pageName);
      manageFocusOnRouteChange();
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(announceChange, { timeout: 100 });
    } else {
      setTimeout(announceChange, 100);
    }

    // End transition after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      className={`page-transition ${isTransitioning ? 'animate-fade-in' : ''}`}
      style={{
        willChange: isTransitioning ? 'opacity, transform' : 'auto',
      }}
    >
      {children}
    </div>
  );
}
