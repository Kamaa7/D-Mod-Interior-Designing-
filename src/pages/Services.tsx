import React from "react";
import { Check, ArrowRight, Star, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import FloatingButtons from "@/components/FloatingButtons";

export default function Services() {
  const services = [
    {
      title: "Modular Kitchens",
      description: "Transform your cooking space with our contemporary modular kitchen designs featuring premium materials and smart storage solutions.",
      features: ["Custom Cabinetry", "Premium Appliances", "Smart Storage", "Modern Designs"],
      image: "/lovable-uploads/e4cc98a6-e3b4-4ae8-850a-d97a0c858dd2.png",
      price: "Starting from ₹2.5 Lakhs"
    },
    {
      title: "Luxury Bedroom Suites",
      description: "Create your perfect sanctuary with our elegant bedroom designs featuring custom furniture and sophisticated styling.",
      features: ["Custom Wardrobes", "Premium Bedding", "Ambient Lighting", "Space Optimization"],
      image: "/lovable-uploads/e7b6aeb8-43ee-4d16-8b9f-e0f7e7b319c1.png",
      price: "Starting from ₹1.8 Lakhs"
    },
    {
      title: "Living Room Design",
      description: "Design stunning living spaces that combine comfort with style, featuring custom furniture and modern aesthetics.",
      features: ["Custom Furniture", "Entertainment Units", "Premium Fabrics", "Designer Lighting"],
      image: "/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png",
      price: "Starting from ₹3 Lakhs"
    },
    {
      title: "Office Interiors",
      description: "Professional office spaces designed for productivity and style with ergonomic furniture and modern layouts.",
      features: ["Ergonomic Design", "Professional Aesthetics", "Space Planning", "Technology Integration"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from ₹2 Lakhs"
    },
    {
      title: "Bathroom Renovation",
      description: "Luxurious bathroom designs with premium fixtures, elegant tiles, and smart storage solutions.",
      features: ["Premium Fixtures", "Waterproofing", "Modern Tiles", "Smart Storage"],
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from ₹1.5 Lakhs"
    },
    {
      title: "Commercial Spaces",
      description: "Comprehensive commercial interior solutions for retail, hospitality, and corporate environments.",
      features: ["Brand Integration", "Customer Experience", "Functional Design", "High Traffic Durability"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Custom Pricing"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Free initial consultation to understand your vision, requirements, and budget.",
      icon: Users
    },
    {
      step: "02", 
      title: "Design Development",
      description: "Our team creates detailed designs and 3D visualizations for your approval.",
      icon: Award
    },
    {
      step: "03",
      title: "Material Selection",
      description: "Choose from our curated selection of premium materials and finishes.",
      icon: Star
    },
    {
      step: "04",
      title: "Installation",
      description: "Professional installation with quality checks and timely project delivery.",
      icon: Clock
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Gomti Nagar, Lucknow",
      rating: 5,
      comment: "Exceptional work on our kitchen renovation. The team was professional and delivered exactly what we envisioned."
    },
    {
      name: "Rajesh Kumar", 
      location: "Hazratganj, Lucknow",
      rating: 5,
      comment: "Outstanding bedroom design! The custom wardrobes and lighting transformed our space completely."
    },
    {
      name: "Neha Patel",
      location: "Alambagh, Lucknow", 
      rating: 5,
      comment: "Professional service from start to finish. Our living room looks absolutely stunning now."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Our Premium Services</h1>
            <p className="text-xl leading-relaxed mb-8">
              From contemporary kitchens to luxury bedrooms, we offer comprehensive interior design solutions 
              that transform your spaces into beautiful, functional environments. Each service is tailored 
              to your unique style and requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
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
              A streamlined approach that ensures your project is completed on time, within budget, and exceeds your expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-orange-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from families who have transformed their homes with our interior design services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and see how we can bring your interior design vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Add floating buttons */}
      <FloatingButtons />
    </div>
  );
}
