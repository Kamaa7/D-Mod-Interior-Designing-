
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Quote, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhatsappIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.671-1.612-.919-2.207-.242-.579-.487-.501-.671-.51-.173-.007-.372-.009-.571-.009-.198 0-.521.074-.795.372-.273.297-1.045 1.023-1.045 2.479 0 1.456 1.07 2.866 1.219 3.065.149.198 2.104 3.215 5.107 4.508.714.308 1.27.492 1.704.63.716.228 1.368.196 1.883.119.574-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M11.99 0C5.373 0 0 5.373 0 12c0 2.116.555 4.085 1.523 5.804L0 24l6.356-1.655A11.961 11.961 0 0 0 11.99 24C18.627 24 24 18.627 24 12S18.627 0 11.99 0" />
  </svg>
);

export default function FloatingButtons() {
  const [showHelper, setShowHelper] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  console.log('FloatingButtons component rendered');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCloseHelper = () => {
    console.log('Close button clicked!');
    setShowHelper(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919616996699";
    const message = "Hi! I'm interested in your interior design services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!mounted) return null;

  const buttonsContent = (
    <>
      <style>{`
        .floating-buttons-container {
          position: fixed !important;
          bottom: 1rem !important;
          right: 1rem !important;
          z-index: 99999 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
          gap: 0.75rem !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          width: auto !important;
          height: auto !important;
        }
        @media (min-width: 640px) {
          .floating-buttons-container {
            bottom: 1.5rem !important;
            right: 1.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .floating-buttons-container {
            bottom: 0.75rem !important;
            right: 0.75rem !important;
            gap: 0.5rem !important;
          }
        }
        .touch-manipulation {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        @media (max-width: 640px) {
          .helper-bubble-mobile {
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
          }
        }
      `}</style>
      <div 
        className="floating-buttons-container" 
        role="complementary" 
        aria-label="Quick action buttons"
      >
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={{ 
          zIndex: 99999,
          visibility: 'visible',
          opacity: 1,
          display: 'flex',
          position: 'relative',
          minWidth: '56px',
          minHeight: '56px',
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        <WhatsappIcon className="w-6 h-6 sm:w-6 sm:h-6" />
      </Button>

      {/* Helper Bubble and Quote Button */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3">
        {showHelper && (
          <div 
            className="relative max-w-[160px] sm:max-w-[200px] rounded-2xl sm:rounded-full bg-white shadow-lg border border-slate-200 px-3 sm:pl-4 sm:pr-8 py-2.5 sm:py-2 text-[11px] sm:text-sm font-medium text-slate-700 animate-fade-in leading-tight sm:leading-normal helper-bubble-mobile"
            style={{ 
              zIndex: 9999,
              pointerEvents: 'auto',
              lineHeight: '1.3',
              whiteSpace: 'normal'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="block sm:inline">We're online. How may I assist you?</span>
            <button
              onClick={handleCloseHelper}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCloseHelper();
              }}
              className="absolute top-1/2 right-1.5 sm:right-2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-full p-1 z-10 touch-manipulation"
              aria-label="Close helper"
              type="button"
              style={{
                zIndex: 100000,
                pointerEvents: 'auto',
                cursor: 'pointer',
                position: 'absolute',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                minWidth: '24px',
                minHeight: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X className="w-3.5 h-3.5 sm:w-3 sm:h-3" style={{ pointerEvents: 'none' }} />
            </button>
          </div>
        )}

        <Link to="/contact">
          <Button
            className="w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation"
            aria-label="Get a free quote"
            title="Get Quote"
            style={{ 
              zIndex: 99999,
              visibility: 'visible',
              opacity: 1,
              display: 'flex',
              position: 'relative',
              minWidth: '56px',
              minHeight: '56px',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <Quote className="w-6 h-6 sm:w-6 sm:h-6" />
          </Button>
        </Link>
      </div>
    </div>
    </>
  );

  return createPortal(buttonsContent, document.body);
}
