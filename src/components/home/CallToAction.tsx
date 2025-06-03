
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sattva-orange to-sattva-orange/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl text-sattva-cream mb-8 max-w-2xl mx-auto">
          Let's bring your vision to life with our expert design solutions. 
          Contact us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-sattva-orange px-8 py-4"
            asChild
          >
            <Link to="/contact">Get Free Quote</Link>
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-sattva-orange hover:bg-sattva-cream px-8 py-4"
            asChild
          >
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
