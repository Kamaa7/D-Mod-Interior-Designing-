
import { Link, useNavigate } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Calendar, Code } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  
  const handleSocialClick = (platform: string) => {
    const socialLinks = {
      facebook: '/signup',
      instagram: 'https://www.instagram.com/_d_mod?igsh=MWJ5N2xqajFubjU2',
      linkedin: '/signup'
    };
    
    if (platform === 'facebook' || platform === 'linkedin') {
      navigate(socialLinks[platform as keyof typeof socialLinks]);
    } else {
      window.open(socialLinks[platform as keyof typeof socialLinks], '_blank');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-5">
              <Link to="/" className="inline-block">
                <img 
                  src="/dmod-logo.png" 
                  alt="D-Mod The Interior Factory" 
                  className="w-28 h-auto object-contain mb-4"
                />
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                Transforming spaces with innovative modular interior design solutions in Lucknow. 
                Creating beautiful, functional environments tailored to your lifestyle.
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <button 
                  onClick={() => handleSocialClick('facebook')}
                  className="p-2.5 bg-gray-800 hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </button>
                <button 
                  onClick={() => handleSocialClick('instagram')}
                  className="p-2.5 bg-gray-800 hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </button>
                <button 
                  onClick={() => handleSocialClick('linkedin')}
                  className="p-2.5 bg-gray-800 hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h3 className="text-base font-semibold text-white tracking-wide uppercase">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-5">
              <h3 className="text-base font-semibold text-white tracking-wide uppercase">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'Space Planning',
                  'Interior Renovation',
                  '3D Visualizations',
                  'Furniture and Fixture Selection',
                  'Lighting Design',
                  'Modular Solutions',
                  'Luxury Interior Design',
                  'Commercial Interior Design'
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services"
                      className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <h3 className="text-base font-semibold text-white tracking-wide uppercase">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Vision Spaces,<br />
                    BBD Viraj Tower Kamta Chauraha<br />
                    Lucknow, Uttar Pradesh 226010
                  </p>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+919616996699" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    +91 96169 96699
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:dmod.interior@gmail.com" className="text-sm text-gray-400 hover:text-primary transition-colors break-all">
                    dmod.interior@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center lg:text-left">
              © 2025 D-Mod The Interior Factory. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-xs text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link to="#" className="text-xs text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Developer Section */}
        <div className="border-t border-gray-900 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Code className="w-3.5 h-3.5" />
              <span>Developed by</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/syed-kamaal-asghar1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaDSS6iEEQeqrc6DCD5HfhA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-gray-800"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="https://lettucemeet.com/l/dXONn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-gray-800"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule a Meeting</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
