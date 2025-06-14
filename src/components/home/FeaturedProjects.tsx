
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

const FeaturedProjects = () => {
  const portfolioProjects = [
    {
      title: 'Luxury Villa Interior',
      category: 'Residential',
      image: '/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png'
    },
    {
      title: 'Contemporary Living Room',
      category: 'Residential',
      image: '/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png'
    },
    {
      title: 'Modern Bedroom Suite',
      category: 'Residential',
      image: '/lovable-uploads/61aaaaa5-18cb-4f23-9b25-6cd59f4b397f.png'
    }
  ];

  return (
    <section className="py-20 bg-sattva-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sattva-dark mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover some of our recent works that showcase our design excellence
          </p>
          
          {/* Get Quote CTA */}
          <div className="bg-orange-600 text-white rounded-xl p-6 max-w-xl mx-auto mb-12">
            <h3 className="text-xl font-bold mb-2">Love What You See?</h3>
            <p className="mb-4 opacity-90">Get a custom quote for your dream project</p>
            <Button 
              className="bg-white text-orange-600 hover:bg-orange-50 font-semibold"
              asChild
            >
              <Link to="/contact">
                <Quote className="w-4 h-4 mr-2" />
                Get Free Quote
              </Link>
            </Button>
          </div>
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
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sattva-dark">
                      View Details
                    </Button>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                      <Link to="/contact">
                        <Quote className="w-4 h-4 mr-1" />
                        Quote
                      </Link>
                    </Button>
                  </div>
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
  );
};

export default FeaturedProjects;
