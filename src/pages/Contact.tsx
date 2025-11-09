
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaButtons from "@/components/SocialMediaButtons";
import MapSection from "@/components/MapSection";
import SEO from "@/components/SEO";
import TapToContact from "@/components/TapToContact";

export default function Contact() {
  // Load saved form data from localStorage
  const loadSavedData = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('contactFormDraft');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  };

  const [formData, setFormData] = useState(() => {
    const saved = loadSavedData();
    return saved || {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDraftSaved, setIsDraftSaved] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  // Auto-save form data to localStorage
  const saveDraft = (data: typeof formData) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('contactFormDraft', JSON.stringify(data));
      setIsDraftSaved(true);
      setTimeout(() => setIsDraftSaved(false), 2000);
    }
  };

  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip auto-save on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Auto-save form data after user stops typing (debounce)
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Only save if form has content
    const hasContent = Object.values(formData).some(value => value.trim() !== '');
    if (hasContent) {
      saveTimeoutRef.current = setTimeout(() => {
        saveDraft(formData);
      }, 1000);
    }

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedData);

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call (will be replaced with actual Resend integration later)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      // Save form data to localStorage as backup
      const savedForms = JSON.parse(localStorage.getItem('contactForms') || '[]');
      savedForms.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('contactForms', JSON.stringify(savedForms));

      setIsSuccess(true);
      
      // Clear saved draft after successful submission
      localStorage.removeItem('contactFormDraft');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with D-Mod The Interior Factory for a free consultation. Contact us for interior design services in Lucknow."
        keywords="contact interior designer, interior design consultation Lucknow, free quote interior design"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Get Your Free Quote</h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Ready to transform your space? Let's discuss your vision and create a design that exceeds your expectations.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">24hrs</div>
                <div className="text-xs opacity-90">Quick Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-xs opacity-90">Consultation</div>
              </div>
            </div>
            
            {/* Tap to Contact Buttons */}
            <TapToContact className="justify-center" />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-primary">Send us a Message</CardTitle>
                  {isDraftSaved && (
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Draft saved
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`mt-1 ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit mobile number"
                          className={`mt-1 ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`mt-1 ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="complete-home">Complete Home Interior</option>
                        <option value="modular-kitchen">Modular Kitchen</option>
                        <option value="bedroom">Bedroom Design</option>
                        <option value="living-room">Living Room</option>
                        <option value="commercial">Commercial Interior</option>
                        <option value="consultation">Design Consultation</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Tell us about your project *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`mt-1 ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Describe your space, style preferences, budget range, timeline..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {errors.submit && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-600 text-sm">{errors.submit}</p>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      disabled={isSubmitting}
                      aria-label="Submit contact form"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Get Your Free Quote
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We're here to help bring your vision to life. Contact us through any of the methods below, 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid gap-4">
                <Card className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Phone</h3>
                      <p className="text-gray-600 text-sm">+91 96169 96699</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Email</h3>
                      <p className="text-gray-600 text-sm">dmod.interior@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Address</h3>
                      <p className="text-gray-600 text-sm">Vision Spaces</p>
                      <p className="text-gray-600 text-sm">BBD Viraj Tower Kamta Chauraha</p>
                      <p className="text-gray-600 text-sm">Lucknow, Uttar Pradesh 226010</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">Business Hours</h3>
                      <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600 text-sm">Sunday: By Appointment</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-blue-800 text-sm">WhatsApp Us</h3>
                </div>
                <p className="text-blue-700 mb-3 text-sm">
                  Get instant responses to your queries. Chat with our design experts on WhatsApp.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => {
                    const phoneNumber = "919616996699";
                    const message = "Hi! I'm interested in your interior design services.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Social Media Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-primary mb-2 text-sm">Follow Us on Social Media</h3>
                <p className="text-blue-700 mb-3 text-sm">
                  Stay updated with our latest projects and design inspiration.
                </p>
                <SocialMediaButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Add floating buttons */}
      <FloatingButtons />
      </div>
    </>
  );
}
