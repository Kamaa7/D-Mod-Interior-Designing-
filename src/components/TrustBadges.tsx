import React from 'react';
import { Award, Shield, Users, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import ScrollAnimatedV2 from './ScrollAnimatedV2';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Award,
      title: "Award Winning",
      description: "10+ Industry Awards",
      color: "text-amber-600 bg-amber-100"
    },
    {
      icon: Shield,
      title: "Certified Professionals",
      description: "Licensed & Insured",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Users,
      title: "200+ Happy Clients",
      description: "Trusted by Hundreds",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: TrendingUp,
      title: "5+ Years Experience",
      description: "Proven Track Record",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "100% Satisfaction",
      color: "text-emerald-600 bg-emerald-100"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Always Punctual",
      color: "text-indigo-600 bg-indigo-100"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimatedV2 direction="fade" delay={0}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose <span className="text-primary">D-Mod?</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Excellence, Reliability, and Trust - That's Our Promise
            </p>
          </div>
        </ScrollAnimatedV2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <ScrollAnimatedV2
                key={index}
                direction="scale"
                delay={index * 100}
                duration={500}
              >
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 group">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full ${badge.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">
                    {badge.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {badge.description}
                  </p>
                </div>
              </ScrollAnimatedV2>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <ScrollAnimatedV2 direction="fade" delay={600}>
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 text-center">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              <span className="text-sm sm:text-base font-medium">100% Quality Materials</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              <span className="text-sm sm:text-base font-medium">Expert Team</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              <span className="text-sm sm:text-base font-medium">Transparent Pricing</span>
            </div>
          </div>
        </ScrollAnimatedV2>
      </div>
    </section>
  );
};

export default TrustBadges;

