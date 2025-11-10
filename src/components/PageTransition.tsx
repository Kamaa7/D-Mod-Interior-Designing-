import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { announcePageChange, manageFocusOnRouteChange } from '@/utils/accessibility';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Announce route change to screen readers and manage focus
    const pageName = location.pathname === '/' 
      ? 'Home' 
      : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2);
    
    setTimeout(() => {
      announcePageChange(pageName);
      manageFocusOnRouteChange();
    }, 100);
  }, [location.pathname]);

  return (
    <div 
      className="animate-fade-in"
      style={{
        animation: 'pageTransitionFade 0.4s ease-in-out',
      }}
    >
      {children}
      <style>{`
        @keyframes pageTransitionFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

