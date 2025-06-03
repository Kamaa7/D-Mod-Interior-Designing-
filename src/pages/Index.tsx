
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
