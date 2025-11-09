
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  getOrganizationSchema, 
  getLocalBusinessSchema, 
  getWebsiteSchema,
  getBreadcrumbSchema 
} from "@/utils/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  schemaType?: 'organization' | 'local-business' | 'website' | 'all';
}

export default function SEO({ title, description, keywords, image, schemaType = 'all' }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const defaultTitle = "D-Mod The Interior Factory - Interior Design in Lucknow";
    const defaultDescription = "Transform your space with D-Mod The Interior Factory. Expert interior design services in Lucknow for residential, commercial, and modular kitchen projects.";
    const defaultKeywords = "interior design, modular kitchen, Lucknow, home design, commercial interiors, space planning, D-Mod";
    const defaultImage = "/lovable-uploads/IMG-20251105-WA0014.png";
    const siteUrl = window.location.origin;

    // Update document title
    document.title = title ? `${title} | D-Mod The Interior Factory` : defaultTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description || defaultDescription);
    updateMetaTag("keywords", keywords || defaultKeywords);
    updateMetaTag("og:title", title || defaultTitle, "property");
    updateMetaTag("og:description", description || defaultDescription, "property");
    updateMetaTag("og:image", image || `${siteUrl}${defaultImage}`, "property");
    updateMetaTag("og:url", `${siteUrl}${location.pathname}`, "property");
    updateMetaTag("twitter:title", title || defaultTitle);
    updateMetaTag("twitter:description", description || defaultDescription);
    updateMetaTag("twitter:image", image || `${siteUrl}${defaultImage}`);

    // Add Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `${siteUrl}${location.pathname}`);

    // Generate breadcrumb path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      { name: 'Home', url: `${siteUrl}/` },
      ...pathSegments.map((segment, index) => ({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        url: `${siteUrl}/${pathSegments.slice(0, index + 1).join('/')}`,
      })),
    ];

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add comprehensive structured data based on schemaType
    const schemas: any[] = [];
    
    if (schemaType === 'all' || schemaType === 'organization') {
      schemas.push(getOrganizationSchema());
    }
    
    if (schemaType === 'all' || schemaType === 'local-business') {
      schemas.push(getLocalBusinessSchema());
    }
    
    if (schemaType === 'all' || schemaType === 'website') {
      schemas.push(getWebsiteSchema());
    }
    
    // Always add breadcrumb schema if not on homepage
    if (location.pathname !== '/' && breadcrumbItems.length > 1) {
      schemas.push(getBreadcrumbSchema(breadcrumbItems));
    }

    // Add all schemas to the page
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup: remove all schema scripts on unmount
      const scriptsToRemove = document.querySelectorAll('script[type="application/ld+json"]');
      scriptsToRemove.forEach(script => script.remove());
    };
  }, [location.pathname, title, description, keywords, image, schemaType]);

  return null;
}

