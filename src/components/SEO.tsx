
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function SEO({ title, description, keywords, image }: SEOProps) {
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

    // Add structured data (Schema.org)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "D-Mod The Interior Factory",
      "image": `${siteUrl}${defaultImage}`,
      "description": description || defaultDescription,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vision Spaces, BBD Viraj Tower Kamta Chauraha",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226010",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8467",
        "longitude": "80.9462"
      },
      "url": siteUrl,
      "telephone": "+919616996699",
      "email": "dmod.interior@gmail.com",
      "priceRange": "₹₹",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://www.instagram.com/_d_mod",
      ]
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove && scriptToRemove === script) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname, title, description, keywords, image]);

  return null;
}

