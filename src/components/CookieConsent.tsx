import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, CheckCircle } from 'lucide-react';
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
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center p-4 pointer-events-none sm:items-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity pointer-events-auto"
        onClick={handleDecline}
      />
      
      {/* Cookie Consent Popup */}
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full pointer-events-auto border border-gray-200 transition-all duration-300 ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Cookie Policy
              </h3>
              <p className="text-sm text-gray-600">
                We value your privacy
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 space-y-3">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            
            {/* Cookie Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-900">Essential Cookies</p>
                  <p className="text-xs text-gray-600">Required for site functionality</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-900">Analytics Cookies</p>
                  <p className="text-xs text-gray-600">Help us improve our website</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mb-6 flex flex-wrap gap-4 text-xs">
            <a
              href="/privacy-policy"
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/cookie-policy"
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 sm:order-2"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 bg-primary hover:bg-primary/90 text-white sm:order-1"
            >
              Accept All Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

