import React from "react";
import { Check, ArrowRight, Star, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import FloatingButtons from "@/components/FloatingButtons";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Services() {
  const services = [
    {
      title: "Space Planning",
      description: "Optimal space utilization with smart layouts that maximize functionality and flow in your interior spaces.",
      features: ["Layout Design", "Traffic Flow Analysis", "Furniture Placement", "Storage Planning"],
      image: "/lovable-uploads/real-twin-photos-u_khkgVDmxA-unsplash.jpg"
    },
    {
      title: "Interior Renovation",
      description: "Complete transformation of your existing spaces with modern designs and premium finishes.",
      features: ["Complete Makeover", "Structural Changes", "Modern Finishes", "Quality Materials"],
      image: "/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png"
    },
    {
      title: "3D Visualizations",
      description: "Realistic 3D renderings that help you visualize your space before implementation.",
      features: ["3D Modeling", "Virtual Walkthrough", "Realistic Rendering", "Design Preview"],
      image: "/lovable-uploads/bilal-mansuri-1C9l7AIkLBg-unsplash.jpg"
    },
    {
      title: "Furniture and Fixture Selection",
      description: "Curated selection of premium furniture and fixtures that perfectly match your design vision.",
      features: ["Custom Furniture", "Premium Fixtures", "Quality Materials", "Designer Pieces"],
      image: "/lovable-uploads/e7b6aeb8-43ee-4d16-8b9f-e0f7e7b319c1.png"
    },
    {
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance ambiance and functionality in every space.",
      features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Lighting Systems"],
      image: "/lovable-uploads/alef-morais-gf0zQ4Y6KKw-unsplash.jpg"
    },
    {
      title: "Modular Solutions",
      description: "Innovative modular designs for kitchens, wardrobes, and storage solutions that maximize space efficiency.",
      features: ["Modular Kitchens", "Custom Wardrobes", "Storage Solutions", "Space Optimization"],
      image: "/lovable-uploads/e4cc98a6-e3b4-4ae8-850a-d97a0c858dd2.png"
    },
    {
      title: "Home Decor",
      description: "Complete home styling with decorative elements, accessories, and finishing touches.",
      features: ["Accessories Selection", "Color Coordination", "Artwork Curation", "Textile Selection"],
      image: "/lovable-uploads/karolina-grabowska-ulh3-dLSXjI-unsplash.jpg"
    },
    {
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality execution.",
      features: ["Timeline Management", "Quality Control", "Vendor Coordination", "Progress Tracking"],
      image: "/lovable-uploads/mark-tenn-iEiBEWRODAE-unsplash.jpg"
    },
    {
      title: "Custom Crafted Solutions",
      description: "Bespoke design solutions tailored to your unique requirements and personal style.",
      features: ["Bespoke Design", "Custom Furniture", "Personalized Solutions", "Unique Concepts"],
      image: "/lovable-uploads/spacejoy-c0JoR_-2x3E-unsplash.jpg"
    },
    {
      title: "Vastu-Compliant Designs",
      description: "Interior designs that follow Vastu principles while maintaining modern aesthetics.",
      features: ["Vastu Consultation", "Directional Planning", "Energy Flow", "Harmonious Design"],
      image: "/lovable-uploads/2h-media-NmSPbe0bDtc-unsplash.jpg"
    },
    {
      title: "Turnkey Solutions",
      description: "Complete end-to-end interior design services from concept to final execution.",
      features: ["Complete Design", "Material Procurement", "Execution", "Final Styling"],
      image: "/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png"
    },
    {
      title: "Design-Only Services",
      description: "Professional design consultation and planning services for DIY enthusiasts.",
      features: ["Design Consultation", "Layout Planning", "Material Selection", "Design Documentation"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Luxury Interior Design",
      description: "Premium luxury interiors with high-end materials and exclusive designer finishes.",
      features: ["Premium Materials", "Luxury Finishes", "Exclusive Designs", "Premium Brands"],
      image: "/lovable-uploads/e7b6aeb8-43ee-4d16-8b9f-e0f7e7b319c1.png"
    },
    {
      title: "Commercial Interior Design",
      description: "Professional commercial spaces designed for productivity, brand identity, and customer experience.",
      features: ["Brand Integration", "Functional Design", "Professional Aesthetics", "Durability"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Our Premium Services</h1>
            <p className="text-xl leading-relaxed mb-8">
              From contemporary kitchens to luxury bedrooms, we offer comprehensive interior design solutions 
              that transform your spaces into beautiful, functional environments. Each service is tailored 
              to your unique style and requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <AnimatedCounter
                end={200}
                suffix="+"
                label="Projects Completed"
                duration={2500}
                numberClassName="text-3xl font-bold text-white"
                labelClassName="text-sm opacity-90 text-white"
              />
              <AnimatedCounter
                end={5}
                suffix="+"
                label="Years of Experience"
                duration={2700}
                numberClassName="text-3xl font-bold text-white"
                labelClassName="text-sm opacity-90 text-white"
              />
              <AnimatedCounter
                end={98}
                suffix="%"
                label="Client Satisfaction"
                duration={2900}
                numberClassName="text-3xl font-bold text-white"
                labelClassName="text-sm opacity-90 text-white"
              />
              <AnimatedCounter
                end={10}
                suffix="+"
                label="Awards Won"
                duration={3100}
                numberClassName="text-3xl font-bold text-white"
                labelClassName="text-sm opacity-90 text-white"
              />
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
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
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
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
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
      <section className="py-16 bg-blue-50">
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
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
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
