import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, ChefHat, Bed, Sofa, Bath, Quote } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Home,
      title: 'Complete Home Interiors',
      description: 'Transform your entire home with our comprehensive design solutions, from concept to completion.',
      features: ['Space Planning', 'Custom Furniture', 'Lighting Design', 'Color Consultation'],
      badge: 'Most Popular',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: ChefHat,
      title: 'Modular Kitchen Design',
      description: 'State-of-the-art modular kitchens that blend functionality with contemporary aesthetics.',
      features: ['Smart Storage', 'Premium Appliances', 'Island Designs', 'Breakfast Counters'],
      badge: 'Premium',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Bed,
      title: 'Luxury Bedroom Suites',
      description: 'Create your personal sanctuary with our elegant bedroom designs and custom wardrobes.',
      features: ['Walk-in Closets', 'Smart Lighting', 'Custom Headboards', 'Storage Solutions'],
      badge: 'Trending',
      image: '/lovable-uploads/d1605e0b-e9cc-408b-9b9d-7bea74bd535a.png'
    },
    {
      icon: Sofa,
      title: 'Living Room Design',
      description: 'Sophisticated living spaces that reflect your lifestyle and create lasting impressions.',
      features: ['Entertainment Units', 'Seating Arrangements', 'Accent Walls', 'Art Curation'],
      badge: 'Classic',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Building2,
      title: 'Commercial Interiors',
      description: 'Professional spaces that enhance productivity and leave lasting impressions on clients.',
      features: ['Office Planning', 'Reception Areas', 'Meeting Rooms', 'Brand Integration'],
      badge: 'Business',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Bath,
      title: 'Bathroom Renovation',
      description: 'Spa-like bathroom experiences with modern fixtures and luxurious finishes.',
      features: ['Rain Showers', 'Vanity Design', 'Premium Tiles', 'Smart Fixtures'],
      badge: 'Luxury',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Most Popular': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Premium': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Trending': return 'bg-green-100 text-green-800 border-green-200';
      case 'Classic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Business': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Luxury': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-orange-100 text-orange-800 border-orange-200';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-6">
            Our Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Design Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From intimate residential spaces to impressive commercial environments, 
            we create designs that inspire and function beautifully.
          </p>
          
          {/* Prominent Get Quote CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
            <p className="mb-6 opacity-90">Get a personalized quote for your dream interior design project</p>
            <Button 
              size="lg" 
              className="bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-xl shadow-lg font-semibold"
              asChild
            >
              <Link to="/contact">
                <Quote className="w-5 h-5 mr-2" />
                Get Your Free Quote Now
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getBadgeColor(service.badge)} px-3 py-1`}>
                      {service.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      className="text-orange-700 hover:bg-orange-50 p-0 h-auto font-medium group/btn flex-1 justify-start"
                      asChild
                    >
                      <Link to="/services">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                      asChild
                    >
                      <Link to="/contact">
                        <Quote className="w-3 h-3 mr-1" />
                        Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
