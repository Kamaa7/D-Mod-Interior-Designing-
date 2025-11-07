
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Image, Users, Phone, Menu, BookOpen, Quote } from "lucide-react";
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
      <SkipToContent />
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
        `}
      </style>
      <SmoothScrollWrapper>
        <div className="min-h-screen flex w-full bg-gray-50 gpu-accelerated">
          <Sidebar className="border-r border-gray-200 bg-white optimize-rendering">
            <SidebarHeader className="border-b border-gray-100 p-6">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="/dmod-logo.png"
                  alt="D-Mod The Interior Factory"
                  className="w-full max-w-[120px] h-auto object-contain image-optimized"
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

          <main className="flex-1 flex flex-col optimize-rendering">
            <header className="bg-white border-b border-gray-100 px-3 sm:px-6 py-3 sm:py-4 gpu-accelerated">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4 md:hidden">
                  <SidebarTrigger className="hover:bg-gray-100 p-2 rounded-lg smooth-transition">
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                  </SidebarTrigger>
                  <div className="flex items-center gap-2">
                    <img
                      src="/dmod-logo.png"
                      alt="D-Mod The Interior Factory"
                      className="w-auto h-5 sm:h-6 object-contain image-optimized"
                    />
                  </div>
                </div>
                
                  <div className="ml-auto hidden sm:block">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-2 sm:p-3 max-w-xs gpu-accelerated">
                    <h3 className="font-semibold text-blue-700 mb-1 text-xs sm:text-sm">D-Mod The Interior Factory</h3>
                    <p className="text-xs text-blue-600 mb-1 sm:mb-2">Get a free consultation</p>
                    <Link to="/contact">
                      <button className="w-full bg-primary text-white py-1 sm:py-1.5 px-2 sm:px-3 rounded text-xs font-medium hover:bg-primary/90 smooth-transition flex items-center justify-center gap-1">
                        <Quote className="w-3 h-3" />
                        Get Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            <main id="main-content" className="flex-1 overflow-auto smooth-scroll" tabIndex={-1}>
              {children}
            </main>
          </main>
        </div>
        
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
        <CookieConsent />
      </SmoothScrollWrapper>
    </SidebarProvider>
  );
}
