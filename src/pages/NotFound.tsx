import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Return to D-Mod The Interior Factory homepage."
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Glass Card Container */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-12 space-y-8">
            {/* 404 Illustration */}
            <div className="relative">
              <div className="text-[120px] sm:text-[180px] font-bold leading-none">
                <span className="bg-gradient-to-r from-blue-600 via-primary to-blue-400 bg-clip-text text-transparent animate-gradient">
                  404
                </span>
              </div>
              
              {/* Floating Glass Decorations */}
              <div className="absolute top-0 left-1/4 w-20 h-20 glass-blue rounded-full blur-2xl opacity-50 glass-floating" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-0 right-1/4 w-24 h-24 glass-blue rounded-full blur-2xl opacity-50 glass-floating" style={{ animationDelay: '2s' }} />
            </div>

            {/* Error Message */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Oops! Page Not Found
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
                The page you're looking for seems to have been moved, deleted, or doesn't exist.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/" className="w-full sm:w-auto">
                <Button 
                  className="w-full glass-button text-white px-6 py-6 sm:py-3 rounded-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-base"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Button>
              </Link>
              
              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button 
                  variant="outline"
                  className="w-full border-2 border-primary text-primary px-6 py-6 sm:py-3 rounded-lg font-medium hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-base"
                >
                  <Search className="w-5 h-5" />
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <Link 
                  to="/services" 
                  className="glass-frosted-light px-4 py-3 rounded-lg hover:glass-blue transition-all duration-300 hover:scale-105 active:scale-95 text-gray-700 hover:text-primary font-medium"
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className="glass-frosted-light px-4 py-3 rounded-lg hover:glass-blue transition-all duration-300 hover:scale-105 active:scale-95 text-gray-700 hover:text-primary font-medium"
                >
                  About Us
                </Link>
                <Link 
                  to="/blog" 
                  className="glass-frosted-light px-4 py-3 rounded-lg hover:glass-blue transition-all duration-300 hover:scale-105 active:scale-95 text-gray-700 hover:text-primary font-medium"
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className="glass-frosted-light px-4 py-3 rounded-lg hover:glass-blue transition-all duration-300 hover:scale-105 active:scale-95 text-gray-700 hover:text-primary font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-6">
              <p className="text-sm text-gray-600 mb-3">
                Need help? Our team is here to assist you.
              </p>
              <Link to="/contact">
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 hover:bg-blue-50 flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="mt-6 text-gray-500 hover:text-primary flex items-center gap-2 mx-auto transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm">Go back to previous page</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}
