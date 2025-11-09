
import React, { useState } from "react";
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

  const handleWhatsAppClick = () => {
    const phoneNumber = "919616996699";
    const message = "Hi! I'm interested in your interior design services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-3 z-50" role="complementary" aria-label="Quick action buttons">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsappIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      {/* Helper Bubble and Quote Button */}
      <div className="flex items-center gap-3">
        {showHelper && (
          <div className="relative max-w-[200px] rounded-full bg-white shadow-lg border border-slate-200 pl-4 pr-8 py-2 text-xs sm:text-sm font-medium text-slate-700 animate-fade-in">
            We're online. How may I assist you?
            <button
              onClick={() => setShowHelper(false)}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-full p-0.5"
              aria-label="Close helper"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <Link to="/contact">
          <Button
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Get a free quote"
            title="Get Quote"
          >
            <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
