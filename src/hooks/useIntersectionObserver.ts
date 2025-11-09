import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Advanced Intersection Observer hook for scroll-triggered animations
 * @param options - Intersection Observer options
 * @returns ref, isIntersecting, and entry
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false,
}: UseIntersectionObserverOptions = {}): {
  ref: RefObject<T>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
} {
  const ref = useRef<T>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const frozen = freezeOnceVisible && isIntersecting;

  useEffect(() => {
    const node = ref.current;
    if (!node || frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin, frozen]);

  return { ref, isIntersecting, entry };
}

/**
 * Hook for staggered animations with multiple elements
 */
export function useStaggeredIntersection<T extends Element = HTMLDivElement>(
  count: number,
  options?: UseIntersectionObserverOptions
): {
  refs: RefObject<T>[];
  visibleIndices: Set<number>;
} {
  const refs = useRef<RefObject<T>[]>(
    Array.from({ length: count }, () => ({ current: null }))
  ).current;
  
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleIndices((prev) => new Set(prev).add(index));
          }
        },
        {
          threshold: options?.threshold ?? 0.1,
          root: options?.root ?? null,
          rootMargin: options?.rootMargin ?? '0px',
        }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [refs, options]);

  return { refs, visibleIndices };
}

