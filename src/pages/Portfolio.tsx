
import React from "react";
import { ExternalLink, Calendar, MapPin, Eye, Heart } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Luxurious Villa Interior",
      category: "Residential",
      location: "Gomti Nagar, Lucknow",
      date: "2024",
      area: "4,500 sq ft",
      budget: "₹25 Lakhs",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete interior transformation of a 4BHK villa with contemporary design elements, featuring premium materials and smart home integration.",
      highlights: ["Smart Home Automation", "Premium Italian Marble", "Custom Furniture", "Imported Lighting"]
    },
    {
      id: 2,
      title: "Modern Corporate Headquarters",
      category: "Commercial",
      location: "Hazratganj, Lucknow",
      date: "2024",
      area: "12,000 sq ft",
      budget: "₹40 Lakhs",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Contemporary office design promoting productivity and collaboration with open spaces, meeting rooms, and recreational areas.",
      highlights: ["Open Office Concept", "Acoustic Solutions", "Biophilic Design", "Energy Efficient Lighting"]
    },
    {
      id: 3,
      title: "Boutique Fine Dining Restaurant",
      category: "Hospitality",
      location: "Alambagh, Lucknow",
      date: "2024",
      area: "3,200 sq ft",
      budget: "₹18 Lakhs",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant dining space with warm ambiance, featuring traditional Indian motifs blended with modern aesthetics.",
      highlights: ["Traditional Art Integration", "Ambient Lighting", "Custom Seating", "Cultural Theme"]
    },
    {
      id: 4,
      title: "Contemporary Penthouse",
      category: "Residential",
      location: "Eldeco, Lucknow",
      date: "2023",
      area: "3,800 sq ft",
      budget: "₹22 Lakhs",
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxurious penthouse design with panoramic city views, featuring minimalist aesthetics and premium finishes.",
      highlights: ["Floor-to-Ceiling Windows", "Minimalist Design", "Premium Finishes", "Rooftop Garden"]
    },
    {
      id: 5,
      title: "Tech Startup Innovation Hub",
      category: "Commercial",
      location: "IT City, Lucknow",
      date: "2023",
      area: "8,500 sq ft",
      budget: "₹32 Lakhs",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Creative workspace designed for innovation and growth with flexible areas, breakout zones, and collaborative spaces.",
      highlights: ["Flexible Workspaces", "Innovation Zones", "Recreational Areas", "Tech Integration"]
    },
    {
      id: 6,
      title: "Traditional Family Home Renovation",
      category: "Residential",
      location: "Aliganj, Lucknow",
      date: "2023",
      area: "2,800 sq ft",
      budget: "₹15 Lakhs",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete renovation of traditional home with modern touches while preserving cultural elements and family values.",
      highlights: ["Cultural Preservation", "Modern Amenities", "Family-Centric Design", "Sustainable Materials"]
    },
    {
      id: 7,
      title: "Luxury Hotel Suite Design",
      category: "Hospitality",
      location: "Charbagh, Lucknow",
      date: "2023",
      area: "1,200 sq ft",
      budget: "₹8 Lakhs",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant hotel suite featuring local Lucknowi craftsmanship with modern luxury amenities for discerning guests.",
      highlights: ["Local Craftsmanship", "Luxury Amenities", "Cultural Elements", "Guest Comfort"]
    },
    {
      id: 8,
      title: "Premium Retail Showroom",
      category: "Commercial",
      location: "Mahanagar, Lucknow",
      date: "2023",
      area: "6,000 sq ft",
      budget: "₹24 Lakhs",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-end retail space designed to enhance product display and customer experience with sophisticated lighting and layout.",
      highlights: ["Product Display Focus", "Customer Experience", "Brand Identity", "Strategic Lighting"]
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Hospitality"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Our Design Portfolio</h1>
            <p className="text-xl leading-relaxed mb-8">
              Explore our collection of beautifully designed spaces that showcase our expertise, creativity, and commitment to excellence. 
              Each project tells a unique story of transformation and innovation.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">₹50Cr+</div>
                <div className="text-sm opacity-90">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100">
                      <Eye className="w-4 h-4" />
                      View Project
                    </button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Area: {project.area}</span>
                      <span>Budget: {project.budget}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                      {project.highlights.length > 2 && (
                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                          +{project.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a space that reflects your style and enhances your lifestyle.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
            Get Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
