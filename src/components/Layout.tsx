
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Image, Users, Phone, Menu } from "lucide-react";
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
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/08138bf5-74b1-4f55-bed9-988810c66341.png"
                alt="Sattva Modular Solutions"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h2 className="font-bold text-gray-900 text-lg">Sattva</h2>
                <p className="text-xs text-gray-500 font-medium">Modular Solutions</p>
              </div>
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
                <button className="w-full bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-800 transition-colors">
                  Book Consultation
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
                    src="/lovable-uploads/08138bf5-74b1-4f55-bed9-988810c66341.png"
                    alt="Sattva Modular Solutions"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-bold text-gray-900">Sattva</span>
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
