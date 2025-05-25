
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Home, Building, ChefHat, Briefcase, Layout, Users, 
  ArrowRight, Check, Star, Clock, Shield, Award 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Interior',
      description: 'Transform your home into a personal sanctuary with our comprehensive residential design services.',
      features: [
        'Living Room & Dining Area Design',
        'Bedroom & Master Suite Styling',
        'Bathroom Renovation & Design',
        'Home Theater & Entertainment Rooms',
        'Kids Room & Nursery Design',
        'Balcony & Outdoor Space Planning'
      ],
      price: 'Starting from ₹2,50,000',
      duration: '6-8 weeks',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Building,
      title: 'Commercial Design',
      description: 'Create impressive commercial spaces that enhance your brand and improve customer experience.',
      features: [
        'Retail Store & Showroom Design',
        'Restaurant & Cafe Interiors',
        'Hotel & Hospitality Design',
        'Healthcare Facility Planning',
        'Educational Institution Design',
        'Corporate Branding Integration'
      ],
      price: 'Starting from ₹5,00,000',
      duration: '8-12 weeks',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: ChefHat,
      title: 'Modular Kitchen',
      description: 'Design the perfect kitchen with our innovative modular solutions that blend style and functionality.',
      features: [
        'Custom Cabinet Design & Installation',
        'Countertop Selection & Fitting',
        'Appliance Integration Planning',
        'Storage Optimization Solutions',
        'Lighting & Electrical Planning',
        'Plumbing & Ventilation Design'
      ],
      price: 'Starting from ₹1,50,000',
      duration: '4-6 weeks',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Briefcase,
      title: 'Office Interiors',
      description: 'Boost productivity with thoughtfully designed office spaces that inspire creativity and collaboration.',
      features: [
        'Open Office & Cubicle Design',
        'Executive Cabin Planning',
        'Meeting & Conference Rooms',
        'Reception & Lobby Design',
        'Break Room & Recreational Areas',
        'Ergonomic Furniture Selection'
      ],
      price: 'Starting from ₹3,00,000',
      duration: '6-10 weeks',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Maximize your space potential with expert planning that optimizes flow, function, and aesthetics.',
      features: [
        'Architectural Space Analysis',
        'Furniture Layout & Placement',
        'Traffic Flow Optimization',
        'Storage Solutions Design',
        'Lighting & Electrical Planning',
        '3D Visualization & Mockups'
      ],
      price: 'Starting from ₹50,000',
      duration: '2-3 weeks',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Users,
      title: 'Design Consultation',
      description: 'Get expert advice and guidance to make informed decisions about your interior design project.',
      features: [
        'Initial Design Strategy Session',
        'Material & Finish Selection',
        'Color Scheme Development',
        'Budget Planning & Optimization',
        'Vendor & Contractor Recommendations',
        'Project Timeline Development'
      ],
      price: 'Starting from ₹10,000',
      duration: '1-2 weeks',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We begin with understanding your vision, requirements, and budget.'
    },
    {
      step: '02',
      title: 'Design Development',
      description: 'Our team creates detailed designs and 3D visualizations for your approval.'
    },
    {
      step: '03',
      title: 'Material Selection',
      description: 'Choose from curated materials and finishes that match your style and budget.'
    },
    {
      step: '04',
      title: 'Execution',
      description: 'Skilled craftsmen bring the design to life with precision and quality.'
    },
    {
      step: '05',
      title: 'Final Delivery',
      description: 'We ensure everything is perfect before handing over your transformed space.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-sattva-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-sattva-dark mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive interior design solutions tailored to your unique needs. 
              From residential homes to commercial spaces, we create environments that inspire.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-sattva-orange mr-2" />
                Quality Guaranteed
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-sattva-orange mr-2" />
                On-Time Delivery
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 text-sattva-orange mr-2" />
                Award Winning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-sattva-orange" />
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-sattva-dark mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-sattva-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <p className="text-sm text-gray-500">Starting Price</p>
                        <p className="text-lg font-semibold text-sattva-orange">{service.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="text-lg font-semibold text-sattva-dark">{service.duration}</p>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-6 bg-sattva-orange hover:bg-sattva-orange/90 text-white"
                      asChild
                    >
                      <Link to="/contact">
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-sattva-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sattva-dark mb-6">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures every project is delivered to perfection
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-sattva-orange rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-sattva-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 mt-16 w-0.5 h-12 bg-sattva-orange/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sattva-dark mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600">The advantages of working with Sattva D-Modular Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-sattva-orange mx-auto mb-4" />
                <h3 className="font-semibold text-sattva-dark mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-600">Only the finest materials and craftsmanship</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-sattva-orange mx-auto mb-4" />
                <h3 className="font-semibold text-sattva-dark mb-2">Timely Delivery</h3>
                <p className="text-sm text-gray-600">Projects completed on schedule, every time</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-sattva-orange mx-auto mb-4" />
                <h3 className="font-semibold text-sattva-dark mb-2">5-Year Warranty</h3>
                <p className="text-sm text-gray-600">Comprehensive warranty on all work</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-sattva-orange mx-auto mb-4" />
                <h3 className="font-semibold text-sattva-dark mb-2">Expert Team</h3>
                <p className="text-sm text-gray-600">Skilled professionals with 15+ years experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sattva-orange to-sattva-orange/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-sattva-cream mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your interior design project. 
            Let's bring your vision to life together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-sattva-orange px-8 py-4"
              asChild
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-sattva-orange hover:bg-sattva-cream px-8 py-4"
              asChild
            >
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
