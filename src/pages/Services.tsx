import React from "react";
import { Home, Building, Palette, Sofa, ChefHat, Bed } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home interior solutions from concept to completion",
      features: ["Living Room Design", "Bedroom Design", "Kitchen & Dining", "Home Office Setup"],
      image: "/lovable-uploads/modern-interior-1.jpg"
    },
    {
      icon: Building,
      title: "Commercial Design",
      description: "Professional spaces that inspire productivity and success",
      features: ["Office Interiors", "Retail Spaces", "Restaurant Design", "Hotel Interiors"],
      image: "/lovable-uploads/modern-interior-2.jpg"
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Expert advice and planning for your interior design project",
      features: ["Color Schemes", "Space Planning", "Material Selection", "Lighting Design"],
      image: "/lovable-uploads/modern-interior-3.jpg"
    },
    {
      icon: Sofa,
      title: "Furniture Selection",
      description: "Curated furniture pieces that perfectly complement your space",
      features: ["Custom Furniture", "Space Optimization", "Style Coordination", "Quality Assurance"],
      image: "/lovable-uploads/modern-interior-1.jpg"
    },
    {
      icon: ChefHat,
      title: "Modular Kitchens",
      description: "Functional and beautiful kitchen solutions for modern homes",
      features: ["Custom Cabinets", "Smart Storage", "Modern Appliances", "Ergonomic Design"],
      image: "/lovable-uploads/modern-interior-2.jpg"
    },
    {
      icon: Bed,
      title: "Bedroom Design",
      description: "Creating peaceful and comfortable bedroom retreats",
      features: ["Master Suites", "Kids Rooms", "Guest Bedrooms", "Walk-in Closets"],
      image: "/lovable-uploads/modern-interior-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive interior design solutions tailored to your unique needs and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to bringing your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your needs and vision" },
              { step: "02", title: "Design", description: "Creating detailed plans and concepts" },
              { step: "03", title: "Approval", description: "Refining and finalizing the design" },
              { step: "04", title: "Implementation", description: "Bringing your space to life" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
