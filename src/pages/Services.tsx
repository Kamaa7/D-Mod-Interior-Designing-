import React from "react";
import { Home, Building, ChefHat, Bed, Sofa, Lightbulb, Palette, Wrench, CheckCircle, Star, Users, Calendar } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Complete Home Interiors",
      description: "Transform your entire home with our comprehensive interior design solutions. From concept to completion, we handle every aspect of your home renovation.",
      features: ["Space Planning", "Furniture Selection", "Color Coordination", "Lighting Design", "Décor & Accessories"],
      price: "Starting from ₹8 Lakhs",
      image: "/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png"
    },
    {
      icon: ChefHat,
      title: "Modular Kitchens",
      description: "Design the heart of your home with our custom modular kitchen solutions. Premium materials, smart storage, and contemporary designs.",
      features: ["Custom Cabinets", "Premium Appliances", "Smart Storage", "Island Designs", "Breakfast Counters"],
      price: "Starting from ₹3 Lakhs",
      image: "/lovable-uploads/df51dda6-b495-446b-b40f-674951240041.png"
    },
    {
      icon: Bed,
      title: "Luxury Bedroom Suites",
      description: "Create your personal sanctuary with our luxury bedroom designs. Custom wardrobes, premium furnishing, and elegant aesthetics.",
      features: ["Custom Wardrobes", "Premium Bedding", "Ambient Lighting", "Walk-in Closets", "Luxury Finishes"],
      price: "Starting from ₹4 Lakhs",
      image: "/lovable-uploads/61aaaaa5-18cb-4f23-9b25-6cd59f4b397f.png"
    },
    {
      icon: Sofa,
      title: "Living Room Design",
      description: "Design stunning living spaces that reflect your personality. Contemporary furniture, smart layouts, and premium materials.",
      features: ["Furniture Design", "Entertainment Units", "Seating Arrangements", "Storage Solutions", "Accent Walls"],
      price: "Starting from ₹5 Lakhs",
      image: "/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png"
    },
    {
      icon: Building,
      title: "Commercial Interiors",
      description: "Professional office and commercial space design that enhances productivity and creates impressive work environments.",
      features: ["Office Layouts", "Meeting Rooms", "Reception Areas", "Workstations", "Branding Integration"],
      price: "Starting from ₹10 Lakhs",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Users,
      title: "Kids Room Design",
      description: "Creative and functional children's rooms that grow with your kids. Safe, fun, and educational spaces.",
      features: ["Safety Features", "Creative Storage", "Study Areas", "Play Zones", "Growth-Adaptive Design"],
      price: "Starting from ₹2.5 Lakhs",
      image: "/lovable-uploads/3550431c-8483-4b89-a5b4-0741e5e708f3.png"
    }
  ];

  const additionalServices = [
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Expert lighting solutions that enhance ambiance and functionality."
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Professional color schemes that reflect your style and create the perfect mood."
    },
    {
      icon: Wrench,
      title: "Furniture Restoration",
      description: "Revitalize your cherished pieces with our expert restoration services."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "Discuss your vision and requirements with our design experts."
    },
    {
      step: 2,
      title: "Design & Planning",
      description: "We create detailed plans and 3D visualizations of your space."
    },
    {
      step: 3,
      title: "Execution",
      description: "Our skilled team brings your design to life with precision and care."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      comment: "Sattva Modular Solutions transformed my home into a dream space! Their attention to detail and commitment to quality is unmatched.",
      rating: 5
    },
    {
      name: "Amit Patel",
      comment: "The team at Sattva Modular Solutions was professional, creative, and delivered exceptional results. I highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Our Design Services</h1>
            <p className="text-xl leading-relaxed mb-8">
              From concept to completion, we offer comprehensive interior design services that transform your spaces into beautiful, functional environments. 
              Discover our range of specialized services tailored to meet your unique needs.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in creating beautiful, functional spaces that enhance your lifestyle and reflect your personality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-700 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">{service.price}</span>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your design project with our specialized additional services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is a success from start to finish.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied clients who have experienced the Sattva Modular Solutions difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                <div className="font-semibold text-gray-800">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us bring your vision to life.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
            Get Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
