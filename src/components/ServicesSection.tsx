
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Layout, Home, Cube, Lightbulb, Briefcase, Wrench, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Optimal space utilization with smart layouts that maximize functionality and flow in your interior spaces.',
      features: ['Layout Design', 'Traffic Flow Analysis', 'Furniture Placement', 'Storage Planning']
    },
    {
      icon: Home,
      title: 'Interior Renovation',
      description: 'Complete transformation of your existing spaces with modern designs and premium finishes.',
      features: ['Complete Makeover', 'Structural Changes', 'Modern Finishes', 'Quality Materials']
    },
    {
      icon: Cube,
      title: '3D Visualizations',
      description: 'Realistic 3D renderings that help you visualize your space before implementation.',
      features: ['3D Modeling', 'Virtual Walkthrough', 'Realistic Rendering', 'Design Preview']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance ambiance and functionality in every space.',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Lighting', 'Smart Lighting Systems']
    },
    {
      icon: Briefcase,
      title: 'Modular Solutions',
      description: 'Innovative modular designs for kitchens, wardrobes, and storage solutions that maximize space efficiency.',
      features: ['Modular Kitchens', 'Custom Wardrobes', 'Storage Solutions', 'Space Optimization']
    },
    {
      icon: Wrench,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality execution.',
      features: ['Timeline Management', 'Quality Control', 'Vendor Coordination', 'Progress Tracking']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:bg-primary hover:text-white p-0 h-auto font-medium group/btn"
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
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
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
