import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Home, Cube, Lightbulb, Briefcase, Wrench, Quote } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Optimal space utilization with smart layouts that maximize functionality and flow in your interior spaces.',
      features: ['Layout Design', 'Traffic Flow Analysis', 'Furniture Placement', 'Storage Planning'],
      badge: 'Most Popular',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Home,
      title: 'Interior Renovation',
      description: 'Complete transformation of your existing spaces with modern designs and premium finishes.',
      features: ['Complete Makeover', 'Structural Changes', 'Modern Finishes', 'Quality Materials'],
      badge: 'Premium',
      image: '/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png'
    },
    {
      icon: Cube,
      title: '3D Visualizations',
      description: 'Realistic 3D renderings that help you visualize your space before implementation.',
      features: ['3D Modeling', 'Virtual Walkthrough', 'Realistic Rendering', 'Design Preview'],
      badge: 'Trending',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance ambiance and functionality in every space.',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Lighting', 'Smart Lighting Systems'],
      badge: 'Classic',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Briefcase,
      title: 'Modular Solutions',
      description: 'Innovative modular designs for kitchens, wardrobes, and storage solutions that maximize space efficiency.',
      features: ['Modular Kitchens', 'Custom Wardrobes', 'Storage Solutions', 'Space Optimization'],
      badge: 'Business',
      image: '/lovable-uploads/e4cc98a6-e3b4-4ae8-850a-d97a0c858dd2.png'
    },
    {
      icon: Wrench,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality execution.',
      features: ['Timeline Management', 'Quality Control', 'Vendor Coordination', 'Progress Tracking'],
      badge: 'Luxury',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Most Popular': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Premium': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Trending': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Classic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Business': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Luxury': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-6">
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Space?</h3>
            <p className="mb-6 opacity-90">Get a personalized quote for your dream interior design project</p>
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl shadow-lg font-semibold"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      className="text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn flex-1 justify-start"
                      asChild
                    >
                      <Link to="/services">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
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
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
