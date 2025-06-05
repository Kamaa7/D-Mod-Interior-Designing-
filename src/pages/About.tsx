
import React from "react";
import { Users, Award, Target, Heart, MapPin, Phone, Mail, Clock, User } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Designer",
      description: "15+ years of experience in creating stunning interior spaces with a passion for modern design.",
      qualifications: "M.Arch Interior Design, IIDA Certified"
    },
    {
      name: "Priya Singh",
      role: "Senior Interior Designer",
      description: "Specialist in residential and commercial design with expertise in sustainable materials.",
      qualifications: "B.Des Interior Design, LEED AP"
    },
    {
      name: "Amit Patel",
      role: "Project Manager",
      description: "Expert in project execution, client relations, and ensuring timely delivery of all projects.",
      qualifications: "MBA Project Management, PMP Certified"
    },
    {
      name: "Neha Sharma",
      role: "3D Visualization Specialist",
      description: "Creates stunning 3D renderings and virtual walkthroughs for better project visualization.",
      qualifications: "B.Tech Computer Graphics, Autodesk Certified"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters in creating the perfect space. We focus on accurate measurements, precise installations, and flawless finishes."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in our work. Our passion drives us to create exceptional spaces that exceed expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project. We maintain the highest standards in design and execution."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients to bring their vision to life. We believe in transparent communication and inclusive design processes."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years of Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Awards Won" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About Sattva Modular Solutions</h1>
            <p className="text-xl leading-relaxed mb-8">
              Transforming spaces into beautiful, functional environments that reflect your unique style and enhance your lifestyle. 
              Based in Lucknow, we bring international design standards to create extraordinary interiors.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-orange-200">{achievement.number}</div>
                  <div className="text-sm opacity-90">{achievement.label}</div>
                </div>
              ))}
            </div>
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
                Founded in 2018 with a passion for creating extraordinary spaces, Sattva Modular Solutions has been at the forefront of interior design innovation in Lucknow and across North India. What started as a small design studio has grown into a full-service interior design firm.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that great design has the power to transform not just spaces, but lives. Our approach combines aesthetic excellence with functional practicality to create interiors that are both beautiful and livable. Every project is an opportunity to tell a unique story through design.
              </p>
              <p className="text-gray-600 mb-6">
                From residential homes to commercial spaces, hotels to retail outlets, we bring creativity, expertise, and attention to detail to every project we undertake. Our commitment to quality and client satisfaction has earned us recognition as one of the leading interior design firms in the region.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                  Lucknow, Uttar Pradesh
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-orange-600" />
                  Est. 2018
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png"
                alt="Modern living room design" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/lovable-uploads/e913b018-0d86-4651-9978-40dd65f6a458.png"
                alt="Contemporary bedroom design" 
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="/lovable-uploads/e4cc98a6-e3b4-4ae8-850a-d97a0c858dd2.png"
                alt="Modern kitchen design with olive green cabinets" 
                className="rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="/lovable-uploads/643b8101-39a5-4367-a2f0-0bd51a038635.png"
                alt="Contemporary kitchen with blue cabinets" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Additional images row */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <img 
              src="/lovable-uploads/dc6906aa-f626-4905-9c0f-0f3e1250e125.png"
              alt="Kitchen with traditional design elements" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="/lovable-uploads/b2edffc3-6271-4e4d-828e-46768a239803.png"
              alt="Elegant dining area with modern furniture" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png"
              alt="Luxury living space" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape the way we approach each project, ensuring exceptional results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of designers, architects, and project managers who bring years of experience and creativity to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <User className="w-24 h-24 text-orange-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-orange-500 mb-3">{member.qualifications}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create inspiring and functional spaces that enhance the quality of life for our clients. We strive to deliver innovative design solutions that exceed expectations while maintaining the highest standards of quality, sustainability, and client service.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as the leading interior design firm in North India, known for our innovative designs, exceptional quality, and client-centric approach. We envision a future where beautiful, functional design is accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
