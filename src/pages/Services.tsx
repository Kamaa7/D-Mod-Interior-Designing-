
import React from "react";
import { Home, Building, Palette, Sofa, ChefHat, Bed, CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Interior Design",
      description: "Complete home interior solutions from concept to completion, tailored to your lifestyle and preferences.",
      features: [
        "Living Room Design & Styling",
        "Master & Guest Bedroom Design",
        "Modular Kitchen Planning",
        "Bathroom Renovation",
        "Home Office Setup",
        "Kids Room Design",
        "Dining Area Styling",
        "Walk-in Closet Design"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from ₹1,200/sq ft"
    },
    {
      icon: Building,
      title: "Commercial Interior Design",
      description: "Professional spaces that inspire productivity, enhance brand image, and create lasting impressions.",
      features: [
        "Corporate Office Interiors",
        "Retail Store Design",
        "Restaurant & Cafe Design",
        "Hotel & Hospitality Design",
        "Showroom Planning",
        "Co-working Spaces",
        "Medical Clinic Interiors",
        "Educational Institute Design"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from ₹800/sq ft"
    },
    {
      icon: Palette,
      title: "Design Consultation & Planning",
      description: "Expert advice and comprehensive planning services for your interior design project.",
      features: [
        "Space Planning & Layout",
        "Color Scheme Selection",
        "Material & Finish Selection",
        "Lighting Design Solutions",
        "Furniture Selection Guide",
        "Budget Planning & Estimation",
        "3D Visualization & Walkthrough",
        "Vastu Consultation"
      ],
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from ₹50/sq ft"
    },
    {
      icon: Sofa,
      title: "Furniture Design & Selection",
      description: "Curated furniture pieces and custom designs that perfectly complement your space.",
      features: [
        "Custom Furniture Design",
        "Space Optimization Solutions",
        "Style Coordination",
        "Quality Material Selection",
        "Ergonomic Design Focus",
        "Sustainable Options",
        "Antique & Vintage Curation",
        "Smart Storage Solutions"
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Custom Pricing"
    },
    {
      icon: ChefHat,
      title: "Modular Kitchen Solutions",
      description: "Functional and beautiful kitchen solutions designed for modern Indian cooking needs.",
      features: [
        "L-Shaped & U-Shaped Layouts",
        "Island & Peninsula Designs",
        "Smart Storage Solutions",
        "Premium Appliance Integration",
        "Ergonomic Design Principles",
        "Easy Maintenance Materials",
        "Chimney & Ventilation Planning",
        "Breakfast Counter Design"
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from ₹1,800/sq ft"
    },
    {
      icon: Bed,
      title: "Bedroom & Wardrobe Design",
      description: "Creating peaceful, comfortable bedroom retreats with optimized storage solutions.",
      features: [
        "Master Suite Design",
        "Kids & Teen Bedrooms",
        "Guest Room Planning",
        "Walk-in Closet Design",
        "Built-in Wardrobe Solutions",
        "Study Area Integration",
        "Lighting & Ambiance",
        "Storage Optimization"
      ],
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from ₹1,500/sq ft"
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Initial Consultation", 
      description: "Understanding your needs, lifestyle, budget, and design preferences through detailed discussion.",
      duration: "1-2 days"
    },
    { 
      step: "02", 
      title: "Concept & Design", 
      description: "Creating detailed plans, 3D visualizations, and material selections based on your requirements.",
      duration: "7-10 days"
    },
    { 
      step: "03", 
      title: "Design Approval", 
      description: "Refining the design based on your feedback and finalizing all details before execution.",
      duration: "2-3 days"
    },
    { 
      step: "04", 
      title: "Project Execution", 
      description: "Professional implementation with regular updates and quality checks throughout the process.",
      duration: "30-60 days"
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
              Comprehensive interior design solutions tailored to your unique needs and lifestyle. From concept to completion, 
              we handle every aspect of your project with professional expertise and attention to detail.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>3D Visualization Included</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>1 Year Service Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of interior design services, each crafted to bring your vision to life.
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
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-orange-600 mb-2">{service.price}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined, transparent approach to bringing your vision to life with professional expertise at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 mb-2">{process.description}</p>
                <p className="text-sm text-orange-600 font-medium">{process.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Sattva Modular Solutions?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                15+
              </div>
              <h3 className="text-lg font-semibold mb-2">Years of Experience</h3>
              <p className="text-gray-600">Extensive experience in residential and commercial interior design.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                500+
              </div>
              <h3 className="text-lg font-semibold mb-2">Projects Completed</h3>
              <p className="text-gray-600">Successfully delivered projects across Lucknow and North India.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                98%
              </div>
              <h3 className="text-lg font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">High client satisfaction rate with repeat customers and referrals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
