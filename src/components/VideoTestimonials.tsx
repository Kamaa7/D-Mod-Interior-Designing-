import React, { useState } from 'react';
import { Play, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimatedV2 from './ScrollAnimatedV2';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  thumbnail: string;
  videoUrl?: string; // Optional for now
  quote: string;
  project: string;
}

const VideoTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya & Rahul Sharma",
      role: "Homeowners",
      location: "Gomti Nagar, Lucknow",
      rating: 5,
      thumbnail: "/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png",
      quote: "D-Mod transformed our villa beyond our expectations. Their attention to detail and professional approach made the entire process smooth and enjoyable. Highly recommended!",
      project: "Luxury Villa Interior"
    },
    {
      id: 2,
      name: "Anjali Verma",
      role: "Business Owner",
      location: "Hazratganj, Lucknow",
      rating: 5,
      thumbnail: "/lovable-uploads/e913b018-0d86-4651-9978-40dd65f6a458.png",
      quote: "The team delivered exactly what we envisioned for our bedroom. The quality of work and materials used were top-notch. Worth every penny!",
      project: "Master Bedroom Renovation"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Architect",
      location: "Alambagh, Lucknow",
      rating: 5,
      thumbnail: "/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png",
      quote: "Professional, timely, and creative. D-Mod's design sense is impeccable. They turned our living space into a masterpiece that everyone admires.",
      project: "Contemporary Living Room"
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimatedV2 direction="fade" delay={0}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-semibold">Client Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What Our Clients <span className="text-primary">Say About Us</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from homeowners who trusted us with their dream spaces.
            </p>
          </div>
        </ScrollAnimatedV2>

        <ScrollAnimatedV2 direction="up" delay={100}>
          <div className="max-w-6xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video/Image Side */}
                <div className="relative group">
                  <img
                    src={currentTestimonial.thumbnail}
                    alt={currentTestimonial.project}
                    className="w-full h-64 sm:h-80 lg:h-full object-cover"
                  />
                  {/* Play Button Overlay (for future video implementation) */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
                      aria-label="Play video testimonial"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-primary ml-1" />
                    </button>
                  </div>
                  {/* Project Label */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-gray-800">
                    {currentTestimonial.project}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-blue-100 mb-4 sm:mb-6" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-4 sm:pt-6">
                    <p className="font-bold text-lg sm:text-xl text-gray-900 mb-1">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      {currentTestimonial.role} • {currentTestimonial.location}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4 mt-6 sm:mt-8">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary hover:bg-blue-50 transition-all duration-300 hover:scale-110"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </button>
                    <div className="flex gap-2 flex-1 justify-center">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary hover:bg-blue-50 transition-all duration-300 hover:scale-110"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <ScrollAnimatedV2 direction="scale" delay={200}>
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
                </div>
              </ScrollAnimatedV2>
              <ScrollAnimatedV2 direction="scale" delay={300}>
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">5★</div>
                  <div className="text-xs sm:text-sm text-gray-600">Average Rating</div>
                </div>
              </ScrollAnimatedV2>
              <ScrollAnimatedV2 direction="scale" delay={400}>
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </ScrollAnimatedV2>
            </div>
          </div>
        </ScrollAnimatedV2>
      </div>
    </section>
  );
};

export default VideoTestimonials;

