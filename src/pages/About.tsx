
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Lightbulb, Target, Heart, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for design drives us to create spaces that truly inspire and delight.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand and fulfill their unique vision.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and trends to deliver cutting-edge solutions.'
    }
  ];

  const team = [
    {
      name: 'Architect Rajesh Gupta',
      role: 'Founder & Lead Designer',
      experience: '15+ Years',
      specialization: 'Residential & Commercial Design'
    },
    {
      name: 'Designer Priya Singh',
      role: 'Senior Interior Designer',
      experience: '10+ Years',
      specialization: 'Modular Kitchen & Space Planning'
    },
    {
      name: 'Architect Amit Sharma',
      role: 'Project Manager',
      experience: '8+ Years',
      specialization: 'Project Execution & Quality Control'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-sattva-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-sattva-dark mb-6">
              About Sattva
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Founded in 2009, Sattva D-Modular Solutions has been at the forefront of interior design 
              innovation in Lucknow. We believe that every space has the potential to inspire, 
              and we're here to unlock that potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-sattva-orange mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sattva-orange mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sattva-orange mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-sattva-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  What started as a small design studio in Lucknow has grown into one of the most 
                  trusted names in modular interior design. Our journey began with a simple belief: 
                  that great design should be accessible to everyone.
                </p>
                <p>
                  Over the years, we've perfected our approach to creating spaces that are not just 
                  beautiful, but also functional and sustainable. Our modular solutions have 
                  revolutionized how people think about interior design, making it more efficient 
                  and cost-effective.
                </p>
                <p>
                  Today, we're proud to have transformed over 500 spaces across Lucknow and beyond, 
                  each one a testament to our commitment to excellence and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our design process"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-sattva-orange text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-sattva-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sattva-dark mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-sattva-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-sattva-orange" />
                    </div>
                    <h3 className="text-xl font-semibold text-sattva-dark mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sattva-dark mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-sattva-orange to-sattva-orange/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-sattva-dark mb-2">{member.name}</h3>
                  <p className="text-sattva-orange font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-500">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-sattva-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sattva-dark mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Recognized for excellence in design and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-sattva-orange mx-auto mb-4" />
                <h3 className="font-semibold text-sattva-dark mb-2">Best Interior Design Firm</h3>
                <p className="text-sm text-gray-600">Lucknow Design Awards 2023</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-sattva-orange mx-auto mb-4" />
                <h3 className="font-semibold text-sattva-dark mb-2">Innovation in Modular Design</h3>
                <p className="text-sm text-gray-600">UP Architecture Forum 2022</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-sattva-orange mx-auto mb-4" />
                <h3 className="font-semibold text-sattva-dark mb-2">Client Choice Award</h3>
                <p className="text-sm text-gray-600">Home & Decor Magazine 2021</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-sattva-orange mx-auto mb-4" />
                <h3 className="font-semibold text-sattva-dark mb-2">Sustainable Design Excellence</h3>
                <p className="text-sm text-gray-600">Green Building Council 2020</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
