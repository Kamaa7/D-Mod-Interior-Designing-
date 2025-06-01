
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sattva-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/7a7124d7-3031-49b3-899f-adf88c772229.png" 
                alt="Sattva Modular Solutions"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-sattva-gray-light leading-relaxed">
              Transforming spaces with innovative modular interior design solutions in Lucknow. 
              Creating beautiful, functional environments tailored to your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-sattva-gray/20 rounded-lg hover:bg-sattva-gray transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-sattva-gray/20 rounded-lg hover:bg-sattva-gray transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-sattva-gray/20 rounded-lg hover:bg-sattva-gray transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sattva-gray-lighter">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-sattva-gray-light hover:text-sattva-gray-lighter transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sattva-gray-lighter">Our Services</h3>
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
                    className="text-sm text-sattva-gray-light hover:text-sattva-gray-lighter transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sattva-gray-lighter">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-sattva-gray mt-0.5 flex-shrink-0" />
                <p className="text-sm text-sattva-gray-light">
                  123 Design Street,<br />
                  Gomti Nagar, Lucknow<br />
                  Uttar Pradesh 226010
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sattva-gray flex-shrink-0" />
                <p className="text-sm text-sattva-gray-light">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sattva-gray flex-shrink-0" />
                <p className="text-sm text-sattva-gray-light">info@sattvadesigns.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sattva-gray mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-sattva-gray-light">
              © 2024 Sattva D-Modular Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-sm text-sattva-gray-light hover:text-sattva-gray-lighter transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-sattva-gray-light hover:text-sattva-gray-lighter transition-colors">
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
