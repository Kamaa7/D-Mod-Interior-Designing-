import { useState, useEffect } from "react";
import { Calendar, MapPin, Eye, Heart, Check, Share2 } from "lucide-react";
import FloatingButtons from "@/components/FloatingButtons";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEO from "@/components/SEO";
import SwipeableGallery from "@/components/SwipeableGallery";
import SkeletonLoader from "@/components/SkeletonLoader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Luxurious Villa Interior",
      category: "Residential",
      location: "Gomti Nagar, Lucknow",
      date: "2025",
      area: "4,500 sq ft",
      budget: "₹25 Lakhs",
      image: "/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png",
      beforeImage: "/lovable-uploads/df51dda6-b495-446b-b40f-674951240041.png",
      description: "Complete interior transformation of a 4BHK villa with contemporary design elements, featuring premium materials and smart home integration.",
      highlights: ["Smart Home Automation", "Premium Italian Marble", "Custom Furniture", "Imported Lighting"]
    },
    {
      id: 2,
      title: "Contemporary Master Bedroom",
      category: "Residential",
      location: "Hazratganj, Lucknow",
      date: "2025",
      area: "350 sq ft",
      budget: "₹8 Lakhs",
      image: "/lovable-uploads/e913b018-0d86-4651-9978-40dd65f6a458.png",
      beforeImage: "/lovable-uploads/GUEST BEDROOM-3.3(RISHITA-C3-1502).png",
      description: "Modern bedroom design with blue accent wall, custom wardrobes, and sophisticated lighting for ultimate comfort and style.",
      highlights: ["Custom Wardrobes", "Accent Wall Design", "Ambient Lighting", "Space Optimization"]
    },
    {
      id: 3,
      title: "Luxury Living Room Design",
      category: "Residential",
      location: "Alambagh, Lucknow",
      date: "2025",
      area: "600 sq ft",
      budget: "₹15 Lakhs",
      image: "/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png",
      beforeImage: "/lovable-uploads/a00c9e1c-280d-4abe-97fd-271b85a332df.png",
      description: "Elegant living space with archway features, premium furnishing, and open kitchen connectivity for modern family living.",
      highlights: ["Archway Design", "Premium Furnishing", "Open Layout", "Natural Materials"]
    },
    {
      id: 4,
      title: "Contemporary TV Unit & Entertainment Area",
      category: "Residential",
      location: "Eldeco, Lucknow",
      date: "2025",
      area: "400 sq ft",
      budget: "₹12 Lakhs",
      image: "/lovable-uploads/a00c9e1c-280d-4abe-97fd-271b85a332df.png",
      description: "Modern entertainment unit with integrated lighting, storage solutions, and contemporary design elements.",
      highlights: ["Integrated Lighting", "Storage Solutions", "Modern Design", "Entertainment Focus"]
    },
    {
      id: 5,
      title: "Compact Kitchen & Living Integration",
      category: "Modular Kitchen",
      location: "IT City, Lucknow",
      date: "2025",
      area: "500 sq ft",
      budget: "₹18 Lakhs",
      image: "/lovable-uploads/df51dda6-b495-446b-b40f-674951240041.png",
      description: "Smart space utilization with integrated kitchen and living area, featuring modern appliances and clever storage.",
      highlights: ["Space Integration", "Modern Appliances", "Smart Storage", "Contemporary Style"]
    },
    {
      id: 6,
      title: "Kids Bedroom Paradise",
      category: "Residential",
      location: "Aliganj, Lucknow",
      date: "2025",
      area: "280 sq ft",
      budget: "₹10 Lakhs",
      image: "/lovable-uploads/3550431c-8483-4b89-a5b4-0741e5e708f3.png",
      description: "Playful and functional kids bedroom with custom furniture, storage solutions, and vibrant design elements.",
      highlights: ["Custom Furniture", "Play Areas", "Creative Storage", "Child-Safe Design"]
    },
    {
      id: 7,
      title: "Luxury Master Suite",
      category: "Residential",
      location: "Charbagh, Lucknow",
      date: "2025",
      area: "500 sq ft",
      budget: "₹20 Lakhs",
      image: "/lovable-uploads/61aaaaa5-18cb-4f23-9b25-6cd59f4b397f.png",
      description: "Sophisticated master bedroom featuring quilted headboard, premium materials, and elegant design aesthetics.",
      highlights: ["Quilted Headboard", "Premium Materials", "Elegant Design", "Luxury Finishes"]
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

  const categories = ["All", "Residential", "Commercial", "Modular Kitchen"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state (in real app, this would be actual data fetching)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms simulated loading

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleViewProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleImageClick = (project: (typeof projects)[0]) => {
    // For now, we'll use single image. You can add multiple images per project later
    setGalleryImages([project.image]);
    setGalleryStartIndex(0);
    setIsGalleryOpen(true);
  };

  const handleShare = async (project: (typeof projects)[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy link to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEO
        title="Our Portfolio"
        description="Explore our portfolio of beautifully designed spaces. View our completed interior design projects in Lucknow including residential, commercial, and modular kitchen designs."
        keywords="interior design portfolio, completed projects, home design gallery, commercial interior design projects, modular kitchen designs"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Design Portfolio</h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              Explore our collection of beautifully designed spaces that showcase our expertise, creativity, and commitment to excellence. 
              Each project tells a unique story of transformation and innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <AnimatedCounter
                end={200}
                suffix="+"
                label="Projects Completed"
                duration={2500}
                numberClassName="text-2xl sm:text-3xl font-bold text-white"
                labelClassName="text-xs sm:text-sm opacity-90 text-white"
              />
              <AnimatedCounter
                end={100}
                suffix="+"
                label="Clients Served"
                duration={2600}
                numberClassName="text-2xl sm:text-3xl font-bold text-white"
                labelClassName="text-xs sm:text-sm opacity-90 text-white"
              />
              <AnimatedCounter
                end={5}
                suffix="+"
                label="Years of Experience"
                duration={2700}
                numberClassName="text-2xl sm:text-3xl font-bold text-white"
                labelClassName="text-xs sm:text-sm opacity-90 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center" role="tablist" aria-label="Filter projects by category">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                role="tab"
                aria-selected={selectedCategory === category}
                aria-controls="projects-grid"
                className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105 active:scale-95 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-12 sm:py-16" id="projects-grid" role="tabpanel" aria-labelledby="projects-tab">
        <div className="container mx-auto px-4 sm:px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <SkeletonLoader variant="project" count={6} />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <div 
                    onClick={() => handleImageClick(project)}
                    className="cursor-pointer"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Project
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(project);
                      }}
                      className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all hover:scale-110 active:scale-95"
                      aria-label="Share project"
                    >
                      <Share2 className="w-4 h-4 text-primary" />
                    </button>
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full">
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
                        <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">
                          +{project.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a space that reflects your style and enhances your lifestyle.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Get your free consultation"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>

      {/* Add floating buttons */}
      <FloatingButtons />

      {/* Project Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Project Image or Before/After Slider */}
                {selectedProject.beforeImage ? (
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.image}
                    beforeLabel="Before"
                    afterLabel="After"
                    className="w-full"
                  />
                ) : (
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Category</h3>
                      <span className="px-3 py-1 bg-blue-100 text-primary text-sm font-medium rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Location</h3>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {selectedProject.location}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Date</h3>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {selectedProject.date}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Area</h3>
                      <p className="text-gray-700">{selectedProject.area}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Budget</h3>
                      <p className="text-gray-700">{selectedProject.budget}</p>
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t">
                  <a
                    href="/contact"
                    className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
                  >
                    Get a Similar Project
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Swipeable Gallery */}
      <SwipeableGallery 
        images={galleryImages}
        isOpen={isGalleryOpen}
        initialIndex={galleryStartIndex}
        onClose={() => setIsGalleryOpen(false)}
      />
      </div>
    </>
  );
}
