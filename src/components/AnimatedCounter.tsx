
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = '', label, duration = 2000 }: AnimatedCounterProps) => {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-blue-200">
        {count}{suffix}
      </div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
