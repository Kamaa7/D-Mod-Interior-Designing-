
import React from "react";
import { MessageSquare, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function FloatingButtons() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919616996699";
    const message = "Hi! I'm interested in your interior design services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50" role="complementary" aria-label="Quick action buttons">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      {/* Get Quote Button with Callout */}
      <div className="flex flex-col items-end gap-2">
        <div className="w-48 sm:w-56 rounded-2xl bg-white text-slate-700 border border-blue-200 shadow-[0_15px_30px_rgba(13,25,48,0.14)] px-4 py-3 text-xs sm:text-sm font-medium">
          <div className="relative">
            <p>We’re online. How may we assist you?</p>
            <span className="absolute -bottom-3 right-6 block w-3 h-3 bg-white border-r border-b border-blue-200 rotate-45" aria-hidden="true" />
          </div>
        </div>

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
