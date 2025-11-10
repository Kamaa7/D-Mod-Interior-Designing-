import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show popup after a small delay for better UX
      setTimeout(() => {
        setIsVisible(true);
        // Trigger animation after visibility
        setTimeout(() => setIsMounted(true), 10);
      }, 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsMounted(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsMounted(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div 
        className={`fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isMounted ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleDecline}
      />
      
      {/* Cookie Consent - Bottom Bar Style with Glassmorphism */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 transition-all duration-500 ${
          isMounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-card glass-glow-blue relative rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-200/50 overflow-hidden">
            {/* Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500" />
            
            {/* Decorative Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                {/* Icon & Text Section */}
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  {/* Animated Cookie Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="glass-gradient-blue w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg">
                        <Cookie className="w-6 h-6 sm:w-7 sm:h-7 text-blue-700 animate-bounce" style={{ animationDuration: '2s' }} />
                      </div>
                      <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-blue-500 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      🍪 We Use Cookies
                      <span className="hidden sm:inline-block glass-badge text-xs">Privacy First</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                      We use cookies to enhance your experience, analyze traffic, and personalize content. 
                      <span className="hidden sm:inline"> Your privacy matters to us.</span>
                    </p>
                    
                    {/* Cookie Types - Compact Pills */}
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 glass-frosted-light px-2.5 py-1 rounded-full border border-blue-200/50">
                        <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-800">Essential</span>
                      </div>
                      <div className="flex items-center gap-1.5 glass-frosted-light px-2.5 py-1 rounded-full border border-blue-200/50">
                        <Shield className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-800">Analytics</span>
                      </div>
                      <a
                        href="/privacy-policy"
                        className="text-xs text-blue-600 hover:text-blue-700 font-medium underline decoration-dotted underline-offset-2 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto lg:flex-shrink-0">
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="glass-frosted-light border-blue-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base py-2 px-4 sm:px-6"
                  >
                    Decline
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="glass-button text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base py-2 px-4 sm:px-6"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accept All
                  </Button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleDecline}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 text-gray-400 hover:text-gray-700 transition-all duration-300 rounded-full hover:bg-white/50 hover:scale-110 active:scale-95"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;

