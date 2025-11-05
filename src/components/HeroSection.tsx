
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium">Trusted by 500+ Happy Clients</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-in">
            <span className="text-primary">The Interior Factory</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fade-in">
            Expert modular interior design solutions in Lucknow. 
            We create sophisticated, functional spaces that reflect your personality and lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-in">
            <AnimatedCounter
              end={200}
              suffix="+"
              label="Projects Completed"
              duration={2500}
              numberClassName="text-3xl font-bold text-blue-200"
              labelClassName="text-sm text-gray-300"
            />
            <AnimatedCounter
              end={5}
              suffix="+"
              label="Years of Experience"
              duration={2700}
              numberClassName="text-3xl font-bold text-blue-200"
              labelClassName="text-sm text-gray-300"
            />
            <AnimatedCounter
              end={98}
              suffix="%"
              label="Client Satisfaction"
              duration={2900}
              numberClassName="text-3xl font-bold text-blue-200"
              labelClassName="text-sm text-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
