import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import useReducedMotion from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface ScrollAnimatedV2Props {
  children: React.ReactNode;
  direction?: 'fade' | 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const ScrollAnimatedV2: React.FC<ScrollAnimatedV2Props> = ({
  children,
  direction = 'fade',
  delay = 0,
  duration = 600,
  className,
  threshold = 0.1,
  once = true,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    freezeOnceVisible: once,
  });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const baseClasses = 'transition-all ease-out';
  
  const hiddenClasses = {
    fade: 'opacity-0',
    up: 'opacity-0 translate-y-8',
    down: 'opacity-0 -translate-y-8',
    left: 'opacity-0 translate-x-8',
    right: 'opacity-0 -translate-x-8',
    scale: 'opacity-0 scale-95',
    rotate: 'opacity-0 rotate-3',
  }[direction];

  const visibleClasses = {
    fade: 'opacity-100',
    up: 'opacity-100 translate-y-0',
    down: 'opacity-100 translate-y-0',
    left: 'opacity-100 translate-x-0',
    right: 'opacity-100 translate-x-0',
    scale: 'opacity-100 scale-100',
    rotate: 'opacity-100 rotate-0',
  }[direction];

  const style = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={ref}
      className={cn(
        baseClasses,
        isIntersecting ? visibleClasses : hiddenClasses,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedV2;

