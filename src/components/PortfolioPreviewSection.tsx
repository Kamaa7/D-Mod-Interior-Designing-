
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioPreviewSection = () => {
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
    <section className="py-20 bg-sattva-gray-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sattva-black mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-sattva-gray max-w-3xl mx-auto">
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
                <div className="absolute inset-0 bg-sattva-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sattva-dark">
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-sattva-dark font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-sattva-black">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-sattva-dark hover:bg-sattva-black text-white px-8 py-4"
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

export default PortfolioPreviewSection;
