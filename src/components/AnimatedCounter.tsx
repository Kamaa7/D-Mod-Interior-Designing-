
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  numberClassName?: string;
  labelClassName?: string;
}

const AnimatedCounter = ({ 
  end, 
  suffix = '', 
  label, 
  duration = 2000,
  numberClassName = "text-3xl font-bold text-blue-200",
  labelClassName = "text-sm opacity-90"
}: AnimatedCounterProps) => {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <div ref={ref} className="text-center">
      <div className={numberClassName}>
        {count}{suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
};

export default AnimatedCounter;
