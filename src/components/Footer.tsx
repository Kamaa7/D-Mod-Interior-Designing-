
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
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1 space-y-3">
              <Link to="/" className="inline-block">
                <img 
                  src="/lovable-uploads/IMG-20251105-WA0014.png" 
                  alt="D-Mod The Interior Factory" 
                  className="w-24 h-auto object-contain"
                />
              </Link>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transforming spaces with innovative modular interior design solutions in Lucknow.
              </p>
              <div className="flex items-center space-x-2 pt-1">
                <button 
                  onClick={() => handleSocialClick('facebook')}
                  className="p-2 bg-gray-800 hover:bg-primary rounded transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
                <button 
                  onClick={() => handleSocialClick('instagram')}
                  className="p-2 bg-gray-800 hover:bg-primary rounded transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
                <button 
                  onClick={() => handleSocialClick('linkedin')}
                  className="p-2 bg-gray-800 hover:bg-primary rounded transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-3">Quick Links</h3>
              <ul className="space-y-1.5">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-xs text-gray-400 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-3">Our Services</h3>
              <ul className="space-y-1.5">
                {[
                  'Space Planning',
                  'Interior Renovation',
                  '3D Visualizations',
                  'Furniture and Fixture Selection',
                  'Lighting Design',
                  'Modular Solutions'
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services"
                      className="text-xs text-gray-400 hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-3">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Vision Spaces, BBD Viraj Tower Kamta Chauraha, Lucknow, Uttar Pradesh 226010
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <a href="tel:+919616996699" className="text-xs text-gray-400 hover:text-primary transition-colors">
                    +91 96169 96699
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <a href="mailto:dmod.interior@gmail.com" className="text-xs text-gray-400 hover:text-primary transition-colors break-all">
                    dmod.interior@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-gray-500 text-center md:text-left">
              © 2025 D-Mod The Interior Factory. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="#" className="text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link to="#" className="text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Developer Section */}
          <div className="border-t border-gray-800 mt-3 pt-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <Code className="w-3 h-3" />
                <span>Developed by</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/syed-kamaal-asghar1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaDSS6iEEQeqrc6DCD5HfhA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-gray-700">•</span>
                <a
                  href="https://lettucemeet.com/l/dXONn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Schedule a Meeting</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
