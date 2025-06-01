
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import LogoDesignSection from '@/components/LogoDesignSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import PortfolioPreviewSection from '@/components/PortfolioPreviewSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <LogoDesignSection />
      <WhyChooseUsSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
