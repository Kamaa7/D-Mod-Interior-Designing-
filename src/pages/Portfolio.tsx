
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Eye, Calendar, MapPin, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Office'];

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Interior',
      category: 'Residential',
      location: 'Gomti Nagar, Lucknow',
      year: '2024',
      area: '3,500 sq ft',
      description: 'Complete transformation of a luxury villa with modern aesthetics and traditional touches.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Smart Home Integration', 'Custom Furniture', 'Imported Materials', 'Landscape Design'],
      rating: 5
    },
    {
      id: 2,
      title: 'Corporate Office Design',
      category: 'Office',
      location: 'Hazratganj, Lucknow',
      year: '2024',
      area: '5,000 sq ft',
      description: 'Modern office space designed to boost productivity and employee satisfaction.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Open Workspace', 'Meeting Pods', 'Recreational Area', 'Green Elements'],
      rating: 5
    },
    {
      id: 3,
      title: 'Boutique Hotel Interior',
      category: 'Commercial',
      location: 'Aminabad, Lucknow',
      year: '2023',
      area: '8,000 sq ft',
      description: 'Elegant hotel interiors that blend luxury with local cultural elements.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Themed Rooms', 'Restaurant Design', 'Lobby & Reception', 'Spa Interiors'],
      rating: 5
    },
    {
      id: 4,
      title: 'Modern Modular Kitchen',
      category: 'Kitchen',
      location: 'Indira Nagar, Lucknow',
      year: '2024',
      area: '400 sq ft',
      description: 'Space-efficient kitchen design with premium appliances and smart storage solutions.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Island Design', 'German Hardware', 'Quartz Countertops', 'Smart Appliances'],
      rating: 5
    },
    {
      id: 5,
      title: 'Contemporary Apartment',
      category: 'Residential',
      location: 'Alambagh, Lucknow',
      year: '2023',
      area: '1,800 sq ft',
      description: 'Stylish apartment interior with space optimization and contemporary design.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Space Optimization', 'Multi-functional Furniture', 'Natural Lighting', 'Storage Solutions'],
      rating: 5
    },
    {
      id: 6,
      title: 'Retail Showroom Design',
      category: 'Commercial',
      location: 'Mahanagar, Lucknow',
      year: '2023',
      area: '2,500 sq ft',
      description: 'Attractive retail space designed to enhance customer experience and product display.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Product Display Systems', 'Customer Flow Design', 'Brand Integration', 'Interactive Zones'],
      rating: 5
    },
    {
      id: 7,
      title: 'Executive Office Suite',
      category: 'Office',
      location: 'Vasant Kunj, Lucknow',
      year: '2024',
      area: '1,200 sq ft',
      description: 'Sophisticated executive office with premium finishes and ergonomic design.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Executive Cabin', 'Conference Room', 'Reception Area', 'Premium Materials'],
      rating: 5
    },
    {
      id: 8,
      title: 'Traditional Kitchen Design',
      category: 'Kitchen',
      location: 'Chowk, Lucknow',
      year: '2023',
      area: '350 sq ft',
      description: 'Traditional kitchen design with modern functionality and authentic materials.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Traditional Design', 'Modern Appliances', 'Wooden Finishes', 'Efficient Layout'],
      rating: 5
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-sattva-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-sattva-dark mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover our collection of stunning interior design projects across Lucknow. 
              Each space tells a unique story of transformation and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-sattva-orange mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sattva-orange mb-2">50+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sattva-orange mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`${
                  activeFilter === category 
                    ? "bg-sattva-orange hover:bg-sattva-orange/90 text-white" 
                    : "border-sattva-orange text-sattva-orange hover:bg-sattva-orange hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sattva-dark">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-sattva-orange text-white">
                    {project.category}
                  </Badge>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="w-3 h-3 fill-sattva-orange text-sattva-orange" />
                    <span className="text-xs font-medium">{project.rating}.0</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-sattva-dark mb-2 group-hover:text-sattva-orange transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Area</p>
                      <p className="font-semibold text-sattva-dark">{project.area}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="text-sattva-orange hover:bg-sattva-orange hover:text-white p-2"
                      asChild
                    >
                      <Link to="/contact">
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sattva-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sattva-orange mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sattva-orange mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sattva-orange mb-2">50+</div>
              <div className="text-gray-600">Design Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sattva-orange mb-2">98%</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sattva-orange to-sattva-orange/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-xl text-sattva-cream mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Start your interior design journey 
            with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-sattva-orange px-8 py-4"
              asChild
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-sattva-orange hover:bg-sattva-cream px-8 py-4"
              asChild
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
