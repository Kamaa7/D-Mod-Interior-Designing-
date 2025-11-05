
import { CheckCircle, Star, Phone } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose D-Mod The Interior Factory?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring passion, expertise, and innovation to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <CheckCircle className="w-10 h-10 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">5+ Years Experience</h3>
            <p className="text-gray-600">Proven track record of delivering exceptional interior design solutions across Lucknow.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Star className="w-10 h-10 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
            <p className="text-gray-600">Skilled designers and craftsmen dedicated to bringing your vision to life with precision.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Phone className="w-10 h-10 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovative Solutions</h3>
            <p className="text-gray-600">Cutting-edge modular designs that maximize space utilization and functionality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
