
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  const address = "4th Floor, Vision Space, BBD Viraj Tower, Kamta, Lucknow, UP 226010";
  const coordinates = "26.8467,80.9462"; // Approximate coordinates for Kamta, Lucknow

  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const getDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Lucknow, our office is easily accessible and equipped with 
            everything you need for a comprehensive design consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dHBPd0Zt9LVfRA&q=${encodeURIComponent(address)}&zoom=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sattva Modular Solutions Office Location"
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  4th Floor, Vision Space<br />
                  BBD Viraj Tower, Kamta<br />
                  Lucknow, Uttar Pradesh 226010
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-semibold text-orange-800 mb-3">Easy to Find</h4>
              <ul className="text-orange-700 space-y-2 text-sm">
                <li>• Located in BBD Viraj Tower, a prominent landmark in Kamta</li>
                <li>• Ample parking space available</li>
                <li>• Accessible by public transport</li>
                <li>• Close to major shopping centers and residential areas</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openInGoogleMaps}
                className="bg-orange-600 hover:bg-orange-700 text-white flex-1"
              >
                <MapPin className="w-4 h-4 mr-2" />
                View on Google Maps
              </Button>
              <Button 
                onClick={getDirections}
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 flex-1"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                Having trouble finding us? Call us at <span className="font-semibold">+91 98765 43210</span> 
                and we'll guide you to our office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
