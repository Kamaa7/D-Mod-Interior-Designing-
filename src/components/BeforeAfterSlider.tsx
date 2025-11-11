import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  initialPosition?: number; // 0-100
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
  initialPosition = 50,
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;

    // Clamp between 0 and 100
    const clampedPercent = Math.max(0, Math.min(100, percent));
    setSliderPosition(clampedPercent);
  };

  // Mouse events
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    handleMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(0, prev - 5));
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(100, prev + 5));
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-lg select-none ${className}`}
      style={{ 
        aspectRatio: '16/10',
        touchAction: 'none',
      }}
      role="img"
      aria-label="Before and after comparison slider"
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* After Label */}
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          style={{ 
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
          }}
          draggable={false}
        />
        {/* Before Label */}
        {sliderPosition > 15 && (
          <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
            {beforeLabel}
          </div>
        )}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-200 touch-manipulation" style={{ minWidth: '56px', minHeight: '56px' }}>
            <MoveHorizontal className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
        </div>

        {/* Vertical Lines */}
        <div className="absolute top-0 left-1/2 w-0.5 h-16 sm:h-20 bg-white transform -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-0.5 h-16 sm:h-20 bg-white transform -translate-x-1/2" />
      </div>

      {/* Instruction Text (shows briefly) */}
      {!isDragging && sliderPosition === initialPosition && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium animate-pulse pointer-events-none">
          ← Drag to compare →
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;

