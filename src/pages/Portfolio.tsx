
import React from "react";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Residential",
      location: "Mumbai, Maharashtra",
      date: "2024",
      image: "/lovable-uploads/modern-interior-1.jpg",
      description: "Complete interior transformation of a 4BHK villa with contemporary design elements."
    },
    {
      id: 2,
      title: "Corporate Office Space",
      category: "Commercial",
      location: "Bangalore, Karnataka",
      date: "2024",
      image: "/lovable-uploads/modern-interior-2.jpg",
      description: "Modern office design promoting productivity and collaboration."
    },
    {
      id: 3,
      title: "Boutique Restaurant",
      category: "Hospitality",
      location: "Delhi, NCR",
      date: "2023",
      image: "/lovable-uploads/modern-interior-3.jpg",
      description: "Elegant dining space with warm ambiance and modern aesthetics."
    },
    {
      id: 4,
      title: "Penthouse Apartment",
      category: "Residential",
      location: "Pune, Maharashtra",
      date: "2023",
      image: "/lovable-uploads/modern-interior-1.jpg",
      description: "Luxurious penthouse design with panoramic city views."
    },
    {
      id: 5,
      title: "Tech Startup Office",
      category: "Commercial",
      location: "Hyderabad, Telangana",
      date: "2023",
      image: "/lovable-uploads/modern-interior-2.jpg",
      description: "Creative workspace designed for innovation and growth."
    },
    {
      id: 6,
      title: "Family Home Makeover",
      category: "Residential",
      location: "Chennai, Tamil Nadu",
      date: "2023",
      image: "/lovable-uploads/modern-interior-3.jpg",
      description: "Complete renovation of traditional home with modern touches."
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
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl leading-relaxed">
              Explore our collection of beautifully designed spaces that showcase our expertise and creativity.
            </p>
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
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
