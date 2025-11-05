
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner, Gomti Nagar',
      content: 'D-Mod The Interior Factory transformed our home beyond our dreams. Their attention to detail and understanding of our needs was exceptional.',
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
      content: 'Working with D-Mod The Interior Factory was a pleasure. Their modular solutions are innovative and perfectly executed.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">Real feedback from satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-6xl text-primary/20 mb-4">"</div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
