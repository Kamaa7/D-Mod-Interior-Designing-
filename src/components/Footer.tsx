
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
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <Link to="/" className="inline-block">
                <img 
                  src="/lovable-uploads/IMG-20251105-WA0014.png" 
                  alt="D-Mod The Interior Factory" 
                  className="w-28 sm:w-32 h-auto object-contain drop-shadow-[0_18px_38px_rgba(16,35,74,0.18)] mix-blend-multiply"
                />
              </Link>
              <p className="text-sm text-slate-600 leading-relaxed">
                Transforming spaces with innovative modular interior design solutions in Lucknow.
              </p>
              <div className="flex items-center space-x-2 pt-1">
                {([
                  { platform: 'facebook', icon: <Facebook className="w-4 h-4" /> },
                  { platform: 'instagram', icon: <Instagram className="w-4 h-4" /> },
                  { platform: 'linkedin', icon: <Linkedin className="w-4 h-4" /> }
                ] as const).map(({ platform, icon }) => (
                  <button 
                    key={platform}
                    onClick={() => handleSocialClick(platform)}
                    className="p-2 bg-white/80 border border-slate-200 hover:bg-primary hover:text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Our Services</h3>
              <ul className="space-y-2">
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
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vision Spaces, BBD Viraj Tower Kamta Chauraha, Lucknow, Uttar Pradesh 226010
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+919616996699" className="text-sm text-slate-600 hover:text-primary transition-colors">
                    +91 96169 96699
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:dmod.interior@gmail.com" className="text-sm text-slate-600 hover:text-primary transition-colors break-all">
                    dmod.interior@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
            <p className="text-slate-500 text-center md:text-left">
              © 2025 D-Mod The Interior Factory. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="#" className="text-slate-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-400">|</span>
              <Link to="#" className="text-slate-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Developer Section */}
          <div className="border-t border-slate-200 mt-4 pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Code className="w-3 h-3" />
                <span>Developed by</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/syed-kamaal-asghar1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaDSS6iEEQeqrc6DCD5HfhA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-400">•</span>
                <a
                  href="https://lettucemeet.com/l/dXONn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-primary transition-colors"
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
