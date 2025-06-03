
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 bg-grid-16 opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Proudly Serving Lucknow
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-500">
                  Living Spaces
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Premium modular solutions crafted with precision. From contemporary kitchens to elegant wardrobes, 
                we bring your vision to life with unmatched quality and style.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-orange-700 px-8 py-6 text-lg rounded-xl transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-700">Award Winning Designs</span>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <div className="text-sm text-gray-600">500+ Happy Families</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Kitchen Design"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-700">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="absolute top-8 -right-4 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
