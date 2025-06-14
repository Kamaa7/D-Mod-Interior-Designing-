import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    const socialLinks = {
      facebook: 'https://facebook.com/sattvamodularsolutions',
      instagram: 'https://instagram.com/sattvamodularsolutions',
      linkedin: 'https://linkedin.com/company/sattvamodularsolutions'
    };
    
    window.open(socialLinks[platform as keyof typeof socialLinks], '_blank');
  };

  return (
    <footer className="bg-sattva-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sattva-orange rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">SATTVA</h1>
                <p className="text-xs text-sattva-cream font-medium tracking-wider">D-MODULAR SOLUTIONS</p>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transforming spaces with innovative modular interior design solutions in Lucknow. 
              Creating beautiful, functional environments tailored to your lifestyle.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="p-2 bg-sattva-orange/20 rounded-lg hover:bg-sattva-orange transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="p-2 bg-sattva-orange/20 rounded-lg hover:bg-sattva-orange transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleSocialClick('linkedin')}
                className="p-2 bg-sattva-orange/20 rounded-lg hover:bg-sattva-orange transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sattva-cream">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-sattva-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sattva-cream">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Residential Interior',
                'Commercial Design',
                'Modular Kitchen',
                'Office Interiors',
                'Space Planning',
                'Consultation'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-sm text-gray-300 hover:text-sattva-cream transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sattva-cream">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-sattva-orange mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  123 Design Street,<br />
                  Gomti Nagar, Lucknow<br />
                  Uttar Pradesh 226010
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sattva-orange flex-shrink-0" />
                <p className="text-sm text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sattva-orange flex-shrink-0" />
                <p className="text-sm text-gray-300">info@sattvadesigns.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Sattva D-Modular Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-sm text-gray-400 hover:text-sattva-cream transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-sattva-cream transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
