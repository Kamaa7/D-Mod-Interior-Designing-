import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Calculator, Home, Bed, Utensils, Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RoomType {
  id: string;
  name: string;
  icon: any;
  basePrice: number;
  unit: string;
}

interface FinishLevel {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

interface CostCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const CostCalculator: React.FC<CostCalculatorProps> = ({ isOpen, onClose }) => {
  console.log('CostCalculator rendered, isOpen:', isOpen);
  const [mounted, setMounted] = useState(false);
  
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<string>('');
  const [area, setArea] = useState<number>(100);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const roomTypes: RoomType[] = [
    { id: 'living', name: 'Living Room', icon: Home, basePrice: 1500, unit: 'sq ft' },
    { id: 'bedroom', name: 'Bedroom', icon: Bed, basePrice: 1200, unit: 'sq ft' },
    { id: 'kitchen', name: 'Kitchen', icon: Utensils, basePrice: 2000, unit: 'sq ft' },
    { id: 'office', name: 'Office', icon: Briefcase, basePrice: 1400, unit: 'sq ft' },
  ];

  const finishLevels: FinishLevel[] = [
    { id: 'standard', name: 'Standard', multiplier: 1, description: 'Quality materials, great value' },
    { id: 'premium', name: 'Premium', multiplier: 1.5, description: 'High-end materials, superior finish' },
    { id: 'luxury', name: 'Luxury', multiplier: 2.2, description: 'Finest materials, bespoke design' },
  ];

  // No auto-popup logic - opens only when button is clicked

  const calculateCost = () => {
    const room = roomTypes.find(r => r.id === selectedRoom);
    const finish = finishLevels.find(f => f.id === selectedFinish);
    
    if (!room || !finish) return { min: 0, max: 0 };

    const baseCost = room.basePrice * area * finish.multiplier;
    const min = Math.round(baseCost * 0.9);
    const max = Math.round(baseCost * 1.1);
    
    return { min, max };
  };

  const { min, max } = calculateCost();

  const handleNext = () => {
    if (step === 1 && selectedRoom) {
      setStep(2);
    } else if (step === 2 && selectedFinish) {
      setStep(3);
    } else if (step === 3) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedRoom('');
    setSelectedFinish('');
    setArea(100);
    setShowResult(false);
  };

  const handleClose = () => {
    onClose();
    handleReset();
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 text-gray-400 hover:text-gray-600 active:bg-gray-100 transition-colors rounded-full hover:bg-gray-100 z-10 touch-manipulation"
          aria-label="Close calculator"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 sm:p-8 rounded-t-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Cost Calculator</h2>
              <p className="text-sm opacity-90">Get instant project estimate</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  s <= step ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!showResult ? (
            <>
              {/* Step 1: Room Type */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Select Room Type</h3>
                    <p className="text-gray-600 text-sm">What space are you looking to transform?</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {roomTypes.map((room) => {
                      const Icon = room.icon;
                      return (
                        <button
                          key={room.id}
                          onClick={() => setSelectedRoom(room.id)}
                          className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 touch-manipulation active:scale-95 ${
                            selectedRoom === room.id
                              ? 'border-primary bg-blue-50 shadow-lg scale-105'
                              : 'border-gray-200 hover:border-blue-300 active:border-blue-300'
                          }`}
                          style={{ minHeight: '100px' }}
                        >
                          <Icon className={`w-8 h-8 mx-auto mb-2 ${
                            selectedRoom === room.id ? 'text-primary' : 'text-gray-400'
                          }`} />
                          <p className="font-semibold text-gray-900">{room.name}</p>
                          <p className="text-xs text-gray-500 mt-1">₹{room.basePrice}/{room.unit}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Finish Level */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Finish Level</h3>
                    <p className="text-gray-600 text-sm">Select the quality level you prefer</p>
                  </div>
                  
                  <div className="space-y-3">
                    {finishLevels.map((finish) => (
                      <button
                        key={finish.id}
                        onClick={() => setSelectedFinish(finish.id)}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          selectedFinish === finish.id
                            ? 'border-primary bg-blue-50 shadow-lg scale-105'
                            : 'border-gray-200 hover:border-blue-300 hover:scale-105'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-bold text-gray-900">{finish.name}</p>
                          {finish.id === 'luxury' && (
                            <Sparkles className="w-5 h-5 text-amber-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{finish.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Area */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Room Area</h3>
                    <p className="text-gray-600 text-sm">What's the size of your space?</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="number"
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        min="50"
                        max="5000"
                        className="w-full px-4 py-3 text-2xl font-bold text-center border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
                      />
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                        sq ft
                      </span>
                    </div>
                    
                    <input
                      type="range"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      min="50"
                      max="1000"
                      step="10"
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>50 sq ft</span>
                      <span>1000 sq ft</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
                {step > 1 && (
                  <Button
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="flex-1 py-3 sm:py-2 touch-manipulation"
                    style={{ minHeight: '44px' }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedRoom) ||
                    (step === 2 && !selectedFinish)
                  }
                  className="flex-1 py-3 sm:py-2 touch-manipulation"
                  style={{ minHeight: '44px' }}
                >
                  {step === 3 ? 'Calculate Cost' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          ) : (
            /* Result */
            <div className="space-y-6 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Calculator className="w-10 h-10 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Estimated Cost</h3>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                  ₹{min.toLocaleString('en-IN')} - ₹{max.toLocaleString('en-IN')}
                </div>
                <p className="text-gray-600">
                  For {area} sq ft {roomTypes.find(r => r.id === selectedRoom)?.name.toLowerCase()} with {' '}
                  {finishLevels.find(f => f.id === selectedFinish)?.name.toLowerCase()} finish
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This is an approximate estimate. Final costs may vary based on specific requirements, materials, and design complexity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1"
                >
                  Calculate Again
                </Button>
                <Button
                  onClick={() => window.location.href = '/contact'}
                  className="flex-1"
                >
                  Get Accurate Quote
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-center text-gray-500">
            💡 Want a detailed quote? Our team will provide a personalized estimate for free!
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CostCalculator;

