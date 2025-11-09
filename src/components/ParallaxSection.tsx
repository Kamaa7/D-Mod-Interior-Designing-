import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import useReducedMotion from '@/hooks/useReducedMotion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // 0 to 1, where 0 is no parallax and 1 is full parallax
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number; // Starting offset position
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className,
  direction = 'up',
  offset = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Skip parallax effect if user prefers reduced motion
    if (reducedMotion) {
      return;
    }

    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate if element is in viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate scroll percentage relative to element position
        const scrollPercentage = (windowHeight - rect.top) / (windowHeight + rect.height);
        const movement = (scrollPercentage - 0.5) * speed * 200; // Adjust multiplier for effect intensity

        let transformValue = '';
        switch (direction) {
          case 'up':
            transformValue = `translate3d(0, ${-movement + offset}px, 0)`;
            break;
          case 'down':
            transformValue = `translate3d(0, ${movement + offset}px, 0)`;
            break;
          case 'left':
            transformValue = `translate3d(${-movement + offset}px, 0, 0)`;
            break;
          case 'right':
            transformValue = `translate3d(${movement + offset}px, 0, 0)`;
            break;
        }

        setTransform(transformValue);
      }
    };

    // Initial calculation
    handleScroll();

    // Throttled scroll listener for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [speed, direction, offset, reducedMotion]);

  return (
    <div
      ref={elementRef}
      className={cn('parallax-layer', className)}
      style={{
        transform: reducedMotion ? 'none' : transform,
        willChange: reducedMotion ? 'auto' : 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;

