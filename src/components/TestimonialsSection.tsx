
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner, Gomti Nagar',
      content: 'Sattva transformed our home beyond our dreams. Their attention to detail and understanding of our needs was exceptional.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'The office design they created has significantly improved our team productivity. Highly professional and creative.',
      rating: 5
    },
    {
      name: 'Anita Verma',
      role: 'Architect',
      content: 'Working with Sattva was a pleasure. Their modular solutions are innovative and perfectly executed.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sattva-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-sattva-gray">Real feedback from satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-sattva-dark mb-4" />
                <p className="text-sattva-gray mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sattva-dark text-sattva-dark" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sattva-black">{testimonial.name}</p>
                  <p className="text-sm text-sattva-gray">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
