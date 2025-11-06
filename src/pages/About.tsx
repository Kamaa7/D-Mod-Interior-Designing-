import React from "react";
import { Users, Award, Target, Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {

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
    { number: 200, suffix: "+", label: "Projects Completed" },
    { number: 5, suffix: "+", label: "Years of Experience" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 10, suffix: "+", label: "Awards Won" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 optimize-rendering">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20 gpu-accelerated">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About D-Mod The Interior Factory</h1>
            <p className="text-xl leading-relaxed mb-8">
              Transforming spaces into beautiful, functional environments that reflect your unique style and enhance your lifestyle. 
              Based in Lucknow, we bring international design standards to create extraordinary interiors.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <AnimatedCounter
                  key={index}
                  end={achievement.number}
                  suffix={achievement.suffix}
                  label={achievement.label}
                  duration={2500 + (index * 200)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 optimize-rendering">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for creating extraordinary spaces, D-Mod The Interior Factory has been at the forefront of interior design innovation in Lucknow and across North India. What started as a small design studio has grown into a full-service interior design firm.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that great design has the power to transform not just spaces, but lives. Our approach combines aesthetic excellence with functional practicality to create interiors that are both beautiful and livable. Every project is an opportunity to tell a unique story through design.
              </p>
              <p className="text-gray-600 mb-6">
                From residential homes to commercial spaces, hotels to retail outlets, we bring creativity, expertise, and attention to detail to every project we undertake. Our commitment to quality and client satisfaction has earned us recognition as one of the leading interior design firms in the region.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Lucknow, Uttar Pradesh
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Established Excellence
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png"
                alt="Modern living room design" 
                className="rounded-lg shadow-lg image-optimized smooth-transition hover:scale-105"
                loading="lazy"
              />
              <img 
                src="/lovable-uploads/e913b018-0d86-4651-9978-40dd65f6a458.png"
                alt="Contemporary bedroom design" 
                className="rounded-lg shadow-lg mt-8 image-optimized smooth-transition hover:scale-105"
                loading="lazy"
              />
              <img 
                src="/lovable-uploads/e4cc98a6-e3b4-4ae8-850a-d97a0c858dd2.png"
                alt="Modern kitchen design with olive green cabinets" 
                className="rounded-lg shadow-lg -mt-8 image-optimized smooth-transition hover:scale-105"
                loading="lazy"
              />
              <img 
                src="/lovable-uploads/643b8101-39a5-4367-a2f0-0bd51a038635.png"
                alt="Contemporary kitchen with blue cabinets" 
                className="rounded-lg shadow-lg image-optimized smooth-transition hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Expanded images gallery */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <img 
              src="/lovable-uploads/dc6906aa-f626-4905-9c0f-0f3e1250e125.png"
              alt="Kitchen with traditional design elements" 
              className="rounded-lg shadow-lg w-full h-64 object-cover image-optimized smooth-transition hover:scale-105"
              loading="lazy"
            />
            <img 
              src="/lovable-uploads/b2edffc3-6271-4e4d-828e-46768a239803.png"
              alt="Elegant dining area with modern furniture" 
              className="rounded-lg shadow-lg w-full h-64 object-cover image-optimized smooth-transition hover:scale-105"
              loading="lazy"
            />
            <img 
              src="/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png"
              alt="Luxury living space" 
              className="rounded-lg shadow-lg w-full h-64 object-cover image-optimized smooth-transition hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* New images section */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <img 
              src="/lovable-uploads/240a474d-26bb-427e-8064-84d1950910b6.png"
              alt="Contemporary living room with artistic wall feature" 
              className="rounded-lg shadow-lg w-full h-64 object-cover image-optimized smooth-transition hover:scale-105"
              loading="lazy"
            />
            <img 
              src="/lovable-uploads/c35c1688-db77-4956-9269-4be00f84a7e2.png"
              alt="Modern entryway design with wooden accents" 
              className="rounded-lg shadow-lg w-full h-64 object-cover image-optimized smooth-transition hover:scale-105"
              loading="lazy"
            />
            <img 
              src="/lovable-uploads/714f47a8-922c-4c49-9f75-219e46704b51.png"
              alt="Elegant office space with artistic wall elements" 
              className="rounded-lg shadow-lg w-full h-64 object-cover image-optimized smooth-transition hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 optimize-rendering">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Founder & Managing Director</h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">Ar. Vishal Singh</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                Ar. Vishal Singh is the driving force behind D-Mod, an innovative interior and construction firm committed to delivering exceptional spaces that blend aesthetics with functionality. With a strong architectural background and a vision for modern design excellence, he has successfully led numerous projects across residential, commercial, and luxury spaces. His leadership, creativity, and dedication to quality craftsmanship continue to set new benchmarks in the interior design industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white optimize-rendering">
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white optimize-rendering">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
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
