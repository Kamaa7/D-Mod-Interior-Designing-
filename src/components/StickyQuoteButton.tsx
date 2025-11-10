import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StickyQuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 200px
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden animate-slide-down">
          <div className="bg-gradient-to-r from-primary to-primary/90 shadow-lg mx-4 rounded-full">
            <Link to="/contact" className="block">
              <Button 
                className="w-full bg-transparent hover:bg-white/10 text-white py-3 rounded-full shadow-none border-none flex items-center justify-center gap-2"
                aria-label="Get a free quote"
              >
                <Quote className="w-4 h-4" />
                <span className="text-sm font-semibold">Get Your Free Quote</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}} />
    </>
  );
};

export default StickyQuoteButton;

