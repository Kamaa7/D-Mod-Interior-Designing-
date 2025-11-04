
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SocialMediaButtonsProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const SocialMediaButtons = ({ variant = 'default', className = '' }: SocialMediaButtonsProps) => {
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

  const buttonSize = variant === 'compact' ? 'w-8 h-8' : 'w-10 h-10';
  const iconSize = variant === 'compact' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className={`flex space-x-3 ${className}`}>
      <button 
        onClick={() => handleSocialClick('facebook')}
        className={`${buttonSize} bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors`}
        title="Follow us on Facebook"
      >
        <Facebook className={iconSize} />
      </button>
      <button 
        onClick={() => handleSocialClick('instagram')}
        className={`${buttonSize} bg-pink-600 hover:bg-pink-700 text-white rounded-lg flex items-center justify-center transition-colors`}
        title="Follow us on Instagram"
      >
        <Instagram className={iconSize} />
      </button>
      <button 
        onClick={() => handleSocialClick('linkedin')}
        className={`${buttonSize} bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-colors`}
        title="Connect with us on LinkedIn"
      >
        <Linkedin className={iconSize} />
      </button>
    </div>
  );
};

export default SocialMediaButtons;
