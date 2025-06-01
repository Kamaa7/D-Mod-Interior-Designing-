
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, Award, Users, Lightbulb } from 'lucide-react';

const Index = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner, Gomti Nagar',
      content: 'Sattva transformed our home beyond our dreams. Their attention to detail and understanding of our needs was exceptional.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'The office design they created has significantly improved our team productivity. Highly professional and creative.',
      rating: 5
    },
    {
      name: 'Anita Verma',
      role: 'Architect',
      content: 'Working with Sattva was a pleasure. Their modular solutions are innovative and perfectly executed.',
      rating: 5
    }
  ];

  const portfolioProjects = [
    {
      title: 'Modern Villa Interior',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corporate Office Design',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxury Kitchen',
      category: 'Modular Kitchen',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection />
      
      <ServicesSection />

      {/* Logo Design Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sattva-dark mb-6">
              Our Brand Identity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the story behind our logo design and brand identity
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingTop: '100.0000%',
              paddingBottom: 0,
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              marginTop: '1.6em',
              marginBottom: '0.9em',
              overflow: 'hidden',
              borderRadius: '8px',
              willChange: 'transform'
            }}>
              <iframe 
                loading="lazy" 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 'none',
                  padding: 0,
                  margin: 0
                }}
                src="https://www.canva.com/design/DAGHgWQUi88/QD-ryNWuMG8jca98EFT3-w/view?embed"
                allowFullScreen
                allow="fullscreen"
              />
            </div>
            
            <div className="text-center mt-4">
              <a
                href="https://www.canva.com/design/DAGHgWQUi88/QD-ryNWuMG8jca98EFT3-w/view?utm_content=DAGHgWQUi88&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener"
                className="text-sattva-orange hover:text-sattva-orange/80 font-medium"
              >
                Gray and Black Simple Studio Logo
              </a>
              <span className="text-gray-600"> by Abdul Aziz</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sattva-dark mb-6">
              Why Choose Sattva?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring passion, expertise, and innovation to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-sattva-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sattva-orange group-hover:scale-110 transition-all duration-300">
                <Award className="w-10 h-10 text-sattva-orange group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-sattva-dark mb-4">15+ Years Experience</h3>
              <p className="text-gray-600">Proven track record of delivering exceptional interior design solutions across Lucknow.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-sattva-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sattva-orange group-hover:scale-110 transition-all duration-300">
                <Users className="w-10 h-10 text-sattva-orange group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-sattva-dark mb-4">Expert Team</h3>
              <p className="text-gray-600">Skilled designers and craftsmen dedicated to bringing your vision to life with precision.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-sattva-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sattva-orange group-hover:scale-110 transition-all duration-300">
                <Lightbulb className="w-10 h-10 text-sattva-orange group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-sattva-dark mb-4">Innovative Solutions</h3>
              <p className="text-gray-600">Cutting-edge modular designs that maximize space utilization and functionality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-sattva-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sattva-dark mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our recent works that showcase our design excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sattva-dark">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-sattva-orange font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold text-sattva-dark">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-sattva-orange hover:bg-sattva-orange/90 text-white px-8 py-4"
              asChild
            >
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sattva-dark mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-sattva-orange mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sattva-orange text-sattva-orange" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-sattva-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sattva-orange to-sattva-orange/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-sattva-cream mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert design solutions. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-sattva-orange px-8 py-4"
              asChild
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-sattva-orange hover:bg-sattva-cream px-8 py-4"
              asChild
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
