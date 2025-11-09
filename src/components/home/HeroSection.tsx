
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxSection from "@/components/ParallaxSection";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 bg-grid-16 opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Proudly Serving Lucknow
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                  D-Mod The Interior Factory
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Premium modular solutions crafted with precision. From contemporary kitchens to elegant wardrobes, 
                we bring your vision to life with unmatched quality and style.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-700 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Award Winning Designs</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-300" />
              <div className="text-xs sm:text-sm text-gray-600">500+ Happy Families</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ParallaxSection speed={0.3} direction="down">
                <img
                  src="/lovable-uploads/Gemini_Generated_Image_jppmrpjppmrpjppm.png"
                  alt="Modern Kitchen Design"
                  loading="eager"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                />
              </ParallaxSection>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass-card p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <AnimatedCounter
                    end={5}
                    suffix="+"
                    label="Years Experience"
                    duration={2500}
                    numberClassName="text-2xl sm:text-3xl font-bold text-blue-700"
                    labelClassName="text-xs sm:text-sm text-gray-600"
                  />
                </div>
              </div>
            </div>
            <ParallaxSection speed={0.2} direction="right" className="absolute top-8 -right-4 w-72 h-72">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 blur-3xl glass-floating" />
            </ParallaxSection>
            <ParallaxSection speed={0.15} direction="left" className="absolute -bottom-8 -left-8 w-96 h-96">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 blur-3xl glass-floating" style={{ animationDelay: '2s' }} />
            </ParallaxSection>
          </div>
        </div>
      </div>
    </section>
  );
}
