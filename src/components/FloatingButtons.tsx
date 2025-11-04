
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
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      {/* Get Quote Button */}
      <Link to="/contact">
        <Button
          className="w-14 h-14 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          title="Get Quote"
        >
          <Quote className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  );
}
