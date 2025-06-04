
import React from "react";
import { Users, Award, Target, Heart } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Designer",
      image: "/lovable-uploads/modern-interior-1.jpg",
      description: "15+ years of experience in creating stunning interior spaces."
    },
    {
      name: "Priya Singh",
      role: "Senior Interior Designer",
      image: "/lovable-uploads/modern-interior-2.jpg", 
      description: "Specialist in modern and contemporary design solutions."
    },
    {
      name: "Amit Patel",
      role: "Project Manager",
      image: "/lovable-uploads/modern-interior-3.jpg",
      description: "Expert in project execution and client satisfaction."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters in creating the perfect space"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in our work"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to bring your vision to life"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About Sattva Modular Solutions</h1>
            <p className="text-xl leading-relaxed">
              Transforming spaces into beautiful, functional environments that reflect your unique style and enhance your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for creating extraordinary spaces, Sattva Modular Solutions has been at the forefront of interior design innovation for over a decade.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that great design has the power to transform not just spaces, but lives. Our approach combines aesthetic excellence with functional practicality to create interiors that are both beautiful and livable.
              </p>
              <p className="text-gray-600">
                From residential homes to commercial spaces, we bring creativity, expertise, and attention to detail to every project we undertake.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/modern-interior-1.jpg" 
                alt="Modern living room design" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/lovable-uploads/modern-interior-2.jpg" 
                alt="Contemporary kitchen design" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape the way we approach each project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of designers and professionals who bring your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
