
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Image, Users, Phone, Menu, BookOpen, Quote, Award, Sparkles } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import FloatingButtons from "./FloatingButtons";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import ScrollToTop from "./ScrollToTop";
import SkipToContent from "./SkipToContent";
import StickyQuoteButton from "./StickyQuoteButton";
import LoadingProgressBar from "./LoadingProgressBar";
import CostCalculator from "./CostCalculator";
import "@/styles/glassmorphism.css";

const navigationItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Services",
    url: "/services",
    icon: Briefcase,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: Image,
  },
  {
    title: "About",
    url: "/about",
    icon: Users,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Phone,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: BookOpen,
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <LoadingProgressBar />
      <SkipToContent />
      {/* Screen reader announcements for route changes */}
      <div
        id="route-announcer"
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />
      <style>
        {`
          :root {
            --primary: hsl(225, 73%, 57%);
            --primary-light: hsl(225, 73%, 67%);
            --primary-dark: hsl(225, 73%, 47%);
            --accent: hsl(225, 73%, 57%);
            --text-primary: #1a1a1a;
            --text-secondary: #666666;
            --background: #fafafa;
            --surface: #ffffff;
            --border: #e5e7eb;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--background);
            color: var(--text-primary);
          }
          
          .text-primary-custom {
            color: var(--primary);
          }
          
          .bg-primary-custom {
            background-color: var(--primary);
          }
          
          .bg-primary-light {
            background-color: var(--primary-light);
          }
          
          .text-accent {
            color: var(--accent);
          }
          
          .bg-accent {
            background-color: var(--accent);
          }
          
          .border-accent {
            border-color: var(--accent);
          }

          /* Reduced Motion Support */
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }

          /* Performance optimizations */
          .gpu-accelerated {
            transform: translateZ(0);
            will-change: transform;
          }

          .optimize-rendering {
            contain: layout style paint;
          }

          .image-optimized {
            content-visibility: auto;
          }
        `}
      </style>
      <SmoothScrollWrapper>
        <div className="min-h-screen flex w-full bg-gray-50 gpu-accelerated">
          <Sidebar className="border-r border-gray-200 bg-white optimize-rendering">
            <SidebarHeader className="border-b border-gray-100 p-6">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="/lovable-uploads/IMG-20251105-WA0014.png"
                  alt="D-Mod The Interior Factory"
                  className="w-full max-w-[150px] h-auto object-contain image-optimized mix-blend-darken"
                />
              </div>
            </SidebarHeader>
            
            <SidebarContent className="p-4">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-2">
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className={`hover:bg-blue-50 hover:text-primary smooth-transition rounded-xl py-3 ${
                            location.pathname === item.url ? 'bg-blue-50 text-primary border-l-4 border-primary' : ''
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-4">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

            <main className="flex-1 flex flex-col optimize-rendering gpu-accelerated">
            <header className="glass-header sticky top-0 z-30 px-3 sm:px-6 py-3 sm:py-4 gpu-accelerated" style={{ willChange: 'transform' }}>
              <div className="flex items-center justify-between gap-4">
                {/* Mobile: Menu + Logo */}
                <div className="flex items-center gap-3 sm:gap-4 md:hidden">
                  <SidebarTrigger className="hover:bg-gray-100 p-2 rounded-lg smooth-transition">
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                  </SidebarTrigger>
                  <div className="flex items-center gap-2">
                    <img
                      src="/lovable-uploads/IMG-20251105-WA0014.png"
                      alt="D-Mod The Interior Factory"
                      className="w-auto h-12 sm:h-8 object-contain image-optimized mix-blend-darken"
                    />
                  </div>
                </div>
                
                {/* Desktop: Animated USP Tagline (Center-Left) */}
                <div className="hidden md:flex items-center gap-3 flex-1 max-w-2xl mx-auto">
                  <div className="glass-gradient-blue px-4 py-2 rounded-full border border-blue-200 shadow-sm animate-fade-in flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-1.5 text-xs text-blue-800 font-medium">
                      <Award className="w-3.5 h-3.5 text-blue-600" />
                      <span>5+ Years Excellence</span>
                    </div>
                    <div className="hidden lg:block w-px h-4 bg-blue-300"></div>
                    <div className="flex items-center gap-1.5 text-xs text-blue-800 font-medium">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      <span>200+ Happy Clients</span>
                    </div>
                    <div className="hidden xl:block w-px h-4 bg-blue-300"></div>
                    <div className="hidden xl:flex items-center gap-1.5 text-xs text-blue-800 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Free 3D Visualization</span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Action CTAs + Main CTA (Right) - Visible on ALL devices */}
                <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
                  {/* Quick Action Pills - NOW VISIBLE ON ALL DEVICES */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* WhatsApp Button */}
                    <a 
                      href="https://wa.me/919616996699?text=Hi!%20I'm%20interested%20in%20your%20interior%20design%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-frosted-light hover:glass-blue p-2 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
                      title="Chat on WhatsApp"
                      aria-label="Chat on WhatsApp"
                    >
                      <svg className="w-5 h-5 sm:w-4 sm:h-4 text-blue-600 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.671-1.612-.919-2.207-.242-.579-.487-.501-.671-.51-.173-.007-.372-.009-.571-.009-.198 0-.521.074-.795.372-.273.297-1.045 1.023-1.045 2.479 0 1.456 1.07 2.866 1.219 3.065.149.198 2.104 3.215 5.107 4.508.714.308 1.27.492 1.704.63.716.228 1.368.196 1.883.119.574-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M11.99 0C5.373 0 0 5.373 0 12c0 2.116.555 4.085 1.523 5.804L0 24l6.356-1.655A11.961 11.961 0 0 0 11.99 24C18.627 24 24 18.627 24 12S18.627 0 11.99 0"/>
                      </svg>
                    </a>
                    
                    {/* Phone Button */}
                    <a 
                      href="tel:+919616996699"
                      className="glass-frosted-light hover:glass-blue p-2 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
                      title="Call Now"
                      aria-label="Call Now"
                    >
                      <Phone className="w-5 h-5 sm:w-4 sm:h-4 text-blue-600 group-hover:text-blue-700" />
                    </a>
                  </div>
                  
                  {/* Main Get Quote CTA */}
                  <Link to="/contact">
                    <button className="glass-button text-white py-2 px-3 sm:px-4 rounded-lg text-sm font-medium hover:scale-105 active:scale-95 smooth-transition flex items-center justify-center gap-2 shadow-lg">
                      <Quote className="w-4 h-4" />
                      <span className="hidden sm:inline">Get Quote</span>
                    </button>
                  </Link>
                </div>
              </div>
            </header>

                     <main id="main-content" className="flex-1 overflow-auto smooth-scroll gpu-accelerated" tabIndex={-1} style={{ willChange: 'scroll-position' }}>
                       {children}
                     </main>
          </main>
        </div>
        
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
        <StickyQuoteButton />
        <CostCalculator />
        <CookieConsent />
      </SmoothScrollWrapper>
    </SidebarProvider>
  );
}
