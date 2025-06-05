
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
      <style>
        {`
          :root {
            --primary: #d2691e;
            --primary-light: #ff8c42;
            --primary-dark: #b8571b;
            --accent: #ff6b35;
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
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r border-gray-200 bg-white">
          <SidebarHeader className="border-b border-gray-100 p-6">
            <div className="flex flex-col items-center gap-4">
              <img
                src="/lovable-uploads/73671f1f-6e81-4f40-91e3-06dc4ddd422a.png"
                alt="Sattva Modular Solutions"
                className="w-full max-w-[120px] h-auto object-contain"
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
                        className={`hover:bg-orange-50 hover:text-orange-700 transition-all duration-300 rounded-xl py-3 ${
                          location.pathname === item.url ? 'bg-orange-50 text-orange-700 border-l-4 border-orange-600' : ''
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

            <div className="mt-8 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <h3 className="font-semibold text-orange-800 mb-2">Transform Your Space</h3>
              <p className="text-sm text-orange-600 mb-3">Get a free consultation for your dream interior</p>
              <Link to="/contact">
                <button className="w-full bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-800 transition-colors flex items-center justify-center gap-2">
                  <Quote className="w-4 h-4" />
                  Get Quote
                </button>
              </Link>
            </div>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white border-b border-gray-100 px-6 py-4 md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
                  <Menu className="w-5 h-5" />
                </SidebarTrigger>
                <div className="flex items-center gap-2">
                  <img
                    src="/lovable-uploads/73671f1f-6e81-4f40-91e3-06dc4ddd422a.png"
                    alt="Sattva Modular Solutions"
                    className="w-auto h-7 object-contain"
                  />
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
