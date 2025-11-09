import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface TapToContactProps {
  phone?: string;
  email?: string;
  className?: string;
}

const TapToContact: React.FC<TapToContactProps> = ({ 
  phone = "919616996699", 
  email = "dmod.interior@gmail.com",
  className = ""
}) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      {/* Tap to Call */}
      <a
        href={`tel:+${phone}`}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        aria-label="Call us"
      >
        <Phone className="w-4 h-4" />
        <span className="text-sm font-medium">Call Now</span>
      </a>

      {/* Tap to Email */}
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 px-4 py-2 bg-white text-primary border-2 border-primary rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        aria-label="Email us"
      >
        <Mail className="w-4 h-4" />
        <span className="text-sm font-medium">Email Us</span>
      </a>
    </div>
  );
};

export default TapToContact;

