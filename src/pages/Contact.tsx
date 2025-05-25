
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, phone, and message are required.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['123 Design Street, Gomti Nagar', 'Lucknow, Uttar Pradesh 226010'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@sattvadesigns.com', 'projects@sattvadesigns.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      action: 'Schedule Visit'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope. Residential projects typically take 6-8 weeks, while commercial projects may take 8-12 weeks.'
    },
    {
      question: 'Do you provide 3D visualizations?',
      answer: 'Yes, we provide detailed 3D visualizations for all our projects to help you visualize the final outcome before implementation.'
    },
    {
      question: 'What is included in your design service?',
      answer: 'Our comprehensive service includes consultation, design development, material selection, project management, and installation supervision.'
    },
    {
      question: 'Do you offer warranty on your work?',
      answer: 'Yes, we provide a 5-year warranty on all structural work and 2 years on finishes and accessories.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Enhanced responsiveness */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-sattva-light to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sattva-dark mb-4 md:mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 px-4 sm:px-0">
              Ready to transform your space? Let's discuss your vision and bring it to life. 
              Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 text-sattva-orange mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-sattva-orange mr-2" />
                Quick Response
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-sattva-orange mr-2" />
                Expert Advice
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info - Improved mobile layout */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form - Enhanced mobile experience */}
            <Card className="border-0 shadow-xl lg:shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-sattva-dark mb-4 md:mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm md:text-base">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="mt-1 h-10 md:h-11"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm md:text-base">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className="mt-1 h-10 md:h-11"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="mt-1 h-10 md:h-11"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-sm md:text-base">Service Required</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="mt-1 h-10 md:h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Interior</SelectItem>
                          <SelectItem value="commercial">Commercial Design</SelectItem>
                          <SelectItem value="kitchen">Modular Kitchen</SelectItem>
                          <SelectItem value="office">Office Interiors</SelectItem>
                          <SelectItem value="planning">Space Planning</SelectItem>
                          <SelectItem value="consultation">Design Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-sm md:text-base">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="mt-1 h-10 md:h-11">
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">₹1-3 Lakhs</SelectItem>
                        <SelectItem value="3-5">₹3-5 Lakhs</SelectItem>
                        <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                        <SelectItem value="10-15">₹10-15 Lakhs</SelectItem>
                        <SelectItem value="15+">₹15+ Lakhs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm md:text-base">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project requirements..."
                      className="mt-1 min-h-[100px] md:min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-sattva-orange hover:bg-sattva-orange/90 text-white py-3 h-11 md:h-12 text-sm md:text-base"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information - Better mobile spacing */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-sattva-dark mb-4 md:mb-6">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  We're here to help you transform your space. Reach out through any of the following 
                  channels and our team will respond promptly.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-md lg:shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-sattva-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-sattva-orange" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="text-base md:text-lg font-semibold text-sattva-dark mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm md:text-base text-gray-600 mb-1 break-words">{detail}</p>
                          ))}
                          <Button 
                            variant="ghost" 
                            className="text-sattva-orange hover:bg-sattva-orange hover:text-white p-0 h-auto font-medium mt-2 text-sm md:text-base"
                          >
                            {info.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Responsive improvements */}
      <section className="py-12 md:py-16 lg:py-20 bg-sattva-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-sattva-dark mb-3 md:mb-4">Find Us</h2>
            <p className="text-gray-600 text-sm md:text-base">Visit our showroom to see our work and discuss your project</p>
          </div>

          <Card className="border-0 shadow-lg lg:shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center p-4">
              <div className="text-center">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-sattva-orange mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-sattva-dark mb-2">Our Location</h3>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 px-2">123 Design Street, Gomti Nagar, Lucknow</p>
                <Button className="bg-sattva-orange hover:bg-sattva-orange/90 text-white text-sm md:text-base h-10 md:h-11">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section - Mobile optimized */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-sattva-dark mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-sm md:text-base">Quick answers to common questions about our services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md lg:shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-sattva-dark mb-2 md:mb-3">{faq.question}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced mobile design */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-sattva-orange to-sattva-orange/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-sattva-cream mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Schedule a free consultation today and let's discuss how we can transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-sattva-orange px-6 md:px-8 py-3 md:py-4 h-11 md:h-12 text-sm md:text-base"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-sattva-orange hover:bg-sattva-cream px-6 md:px-8 py-3 md:py-4 h-11 md:h-12 text-sm md:text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
