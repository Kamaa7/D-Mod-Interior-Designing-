
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Residential Interior Design',
      description: 'Transform your home into a personalized sanctuary with our comprehensive residential design services.',
      features: ['Living Room Design', 'Bedroom Interiors', 'Kitchen Planning', 'Bathroom Design'],
      badge: 'Popular'
    },
    {
      title: 'Commercial Space Design',
      description: 'Create inspiring work environments that boost productivity and reflect your brand identity.',
      features: ['Office Design', 'Retail Spaces', 'Restaurant Interiors', 'Co-working Spaces'],
      badge: 'Business'
    },
    {
      title: 'Modular Solutions',
      description: 'Smart, space-efficient modular designs that adapt to your changing needs and lifestyle.',
      features: ['Modular Kitchen', 'Built-in Wardrobes', 'Storage Solutions', 'Space Optimization'],
      badge: 'Innovative'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sattva-dark mb-6">
            Our Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive interior design solutions tailored to your unique vision and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-sattva-orange/10 text-sattva-orange">
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-sattva-dark mb-4 group-hover:text-sattva-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-sattva-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
