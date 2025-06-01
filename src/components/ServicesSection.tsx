
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Building, ChefHat, Briefcase, Layout, Users, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Interior',
      description: 'Complete home makeovers with personalized design solutions that reflect your lifestyle and preferences.',
      features: ['Living Room Design', 'Bedroom Styling', 'Bathroom Renovation', 'Home Decor']
    },
    {
      icon: Building,
      title: 'Commercial Design',
      description: 'Professional commercial spaces that enhance productivity and create lasting impressions on clients.',
      features: ['Retail Spaces', 'Restaurants', 'Hotels', 'Showrooms']
    },
    {
      icon: ChefHat,
      title: 'Modular Kitchen',
      description: 'Innovative kitchen designs that combine functionality with aesthetics for the heart of your home.',
      features: ['Space Optimization', 'Storage Solutions', 'Modern Appliances', 'Custom Cabinets']
    },
    {
      icon: Briefcase,
      title: 'Office Interiors',
      description: 'Productive work environments that inspire creativity and enhance employee satisfaction.',
      features: ['Workspace Planning', 'Meeting Rooms', 'Reception Areas', 'Collaborative Spaces']
    },
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Optimal space utilization with smart layouts that maximize functionality and flow.',
      features: ['Layout Design', 'Furniture Placement', 'Traffic Flow', 'Storage Planning']
    },
    {
      icon: Users,
      title: 'Design Consultation',
      description: 'Expert advice and guidance to help you make informed decisions about your interior design project.',
      features: ['Design Strategy', 'Material Selection', 'Color Schemes', 'Budget Planning']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sattva-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sattva-dark mb-6">
            Our Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive interior design services 
            tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-sattva-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sattva-orange group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-sattva-orange group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-sattva-dark mb-4 group-hover:text-sattva-orange transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-sattva-orange rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="text-sattva-orange hover:bg-sattva-orange hover:text-white p-0 h-auto font-medium group/btn"
                    asChild
                  >
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-sattva-orange hover:bg-sattva-orange/90 text-white px-8 py-4"
            asChild
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
