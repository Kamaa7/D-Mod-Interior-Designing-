import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Sparkles } from 'lucide-react';
import ScrollAnimatedV2 from './ScrollAnimatedV2';

interface Transformation {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  location: string;
}

const TransformationShowcase: React.FC = () => {
  const transformations: Transformation[] = [
    {
      id: 1,
      title: "Modern Living Room Makeover",
      description: "Transformed a dated living space into a contemporary sanctuary with custom furniture and smart lighting.",
      beforeImage: "/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png",
      afterImage: "/lovable-uploads/57cc0f65-4207-46af-9796-f8593761456c.png",
      category: "Living Room",
      location: "Gomti Nagar, Lucknow",
    },
    {
      id: 2,
      title: "Bedroom Transformation",
      description: "Created a serene master bedroom with elegant design and optimal space utilization.",
      beforeImage: "/lovable-uploads/e913b018-0d86-4651-9978-40dd65f6a458.png",
      afterImage: "/lovable-uploads/GUEST BEDROOM-3.3(RISHITA-C3-1502).png",
      category: "Bedroom",
      location: "Hazratganj, Lucknow",
    },
    {
      id: 3,
      title: "Kitchen Revolution",
      description: "Modernized kitchen with modular solutions, premium appliances, and efficient workflow design.",
      beforeImage: "/lovable-uploads/df51dda6-b495-446b-b40f-674951240041.png",
      afterImage: "/lovable-uploads/72662bb2-ec5d-4de0-81da-80d383cfc83b.png",
      category: "Kitchen",
      location: "IT City, Lucknow",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen'];

  const filteredTransformations = selectedCategory === 'All'
    ? transformations
    : transformations.filter(t => t.category === selectedCategory);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollAnimatedV2 direction="fade" delay={0}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-semibold">Our Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              See the Amazing <span className="text-primary">Before & After</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Witness the incredible transformations we've created for our clients. 
              Drag the slider to see the difference our expertise makes.
            </p>
          </div>
        </ScrollAnimatedV2>

        {/* Category Filter */}
        <ScrollAnimatedV2 direction="up" delay={100}>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:scale-105 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimatedV2>

        {/* Transformations Grid */}
        <div className="space-y-12 sm:space-y-16">
          {filteredTransformations.map((transformation, index) => (
            <ScrollAnimatedV2
              key={transformation.id}
              direction="up"
              delay={index * 100}
              duration={600}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">
                  {/* Slider */}
                  <div className="order-2 lg:order-1">
                    <BeforeAfterSlider
                      beforeImage={transformation.beforeImage}
                      afterImage={transformation.afterImage}
                      beforeLabel="Before"
                      afterLabel="After"
                      initialPosition={50}
                    />
                  </div>

                  {/* Details */}
                  <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4 sm:space-y-6">
                    <div>
                      <div className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        {transformation.category}
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {transformation.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 flex items-center gap-2 mb-3 sm:mb-4">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {transformation.location}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {transformation.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                        <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">4 Weeks</div>
                        <div className="text-xs sm:text-sm text-gray-600">Completion</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <a
                        href="/contact"
                        className="inline-block w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-center hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                      >
                        Start Your Transformation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedV2>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimatedV2 direction="scale" delay={200}>
          <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready for Your Own Transformation?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create something amazing together. Get your free consultation today!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
            >
              Get Free Consultation
            </a>
          </div>
        </ScrollAnimatedV2>
      </div>
    </section>
  );
};

export default TransformationShowcase;

