
import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="D-Mod The Interior Factory - Premium interior design services in Lucknow. Transform your space with expert design solutions for residential and commercial projects."
        keywords="interior design Lucknow, home interior design, modular kitchen, commercial interior design, space planning, 3D visualization"
      />
      <div className="min-h-screen">
        <HeroSection />
        <ServicesOverview />
        <FeaturedProjects />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </div>
    </>
  );
}
