// Advanced SEO Utilities for D-Mod The Interior Factory

// Organization Schema
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'D-Mod The Interior Factory',
  alternateName: 'D-Mod Interior',
  url: 'https://dmod-interior.com',
  logo: 'https://dmod-interior.com/lovable-uploads/IMG-20251105-WA0014.png',
  description: 'Premium modular interior design solutions in Lucknow, Uttar Pradesh. Specializing in residential, commercial, and turnkey interior projects.',
  email: 'dmod.interior@gmail.com',
  telephone: '+91-9616996699',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vision Spaces, BBD Viraj Tower Kamta Chauraha',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    postalCode: '226010',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '26.8467',
    longitude: '80.9462',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/_d_mod',
    'https://www.facebook.com/dmod',
    'https://www.linkedin.com/company/dmod',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '$$-$$$',
  areaServed: {
    '@type': 'City',
    name: 'Lucknow',
  },
});

// Local Business Schema
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dmod-interior.com',
  name: 'D-Mod The Interior Factory',
  image: 'https://dmod-interior.com/lovable-uploads/IMG-20251105-WA0014.png',
  telephone: '+91-9616996699',
  email: 'dmod.interior@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vision Spaces, BBD Viraj Tower Kamta Chauraha',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    postalCode: '226010',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '26.8467',
    longitude: '80.9462',
  },
  url: 'https://dmod-interior.com',
  priceRange: '$$-$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
});

// Service Schema
export const getServiceSchema = (serviceName: string, description: string, price?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'Organization',
    name: 'D-Mod The Interior Factory',
    url: 'https://dmod-interior.com',
  },
  description,
  areaServed: {
    '@type': 'City',
    name: 'Lucknow',
  },
  ...(price && {
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'INR',
    },
  }),
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Article Schema (for Blog)
export const getArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Person',
    name: article.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'D-Mod The Interior Factory',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dmod-interior.com/lovable-uploads/IMG-20251105-WA0014.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
});

// FAQ Schema
export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Product/Portfolio Schema
export const getPortfolioItemSchema = (item: {
  name: string;
  description: string;
  image: string;
  category: string;
  location: string;
  area?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: item.name,
  description: item.description,
  image: item.image,
  creator: {
    '@type': 'Organization',
    name: 'D-Mod The Interior Factory',
  },
  genre: item.category,
  locationCreated: item.location,
  ...(item.area && { additionalProperty: { '@type': 'PropertyValue', name: 'Area', value: item.area } }),
});

// Review Schema
export const getReviewSchema = (review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'D-Mod The Interior Factory',
  },
  author: {
    '@type': 'Person',
    name: review.author,
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: review.rating,
    bestRating: '5',
    worstRating: '1',
  },
  reviewBody: review.reviewBody,
  datePublished: review.datePublished,
});

// WebSite Schema
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'D-Mod The Interior Factory',
  url: 'https://dmod-interior.com',
  description: 'Premium modular interior design solutions in Lucknow. Expert residential, commercial, and turnkey interior design services.',
  publisher: {
    '@type': 'Organization',
    name: 'D-Mod The Interior Factory',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://dmod-interior.com/portfolio?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

// Helper to inject schema into page
export const injectSchema = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
  return () => {
    document.head.removeChild(script);
  };
};

// Meta Tags Generator
export const generateMetaTags = (page: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}) => {
  const baseUrl = 'https://dmod-interior.com';
  const defaultImage = `${baseUrl}/lovable-uploads/IMG-20251105-WA0014.png`;

  return [
    { name: 'description', content: page.description },
    ...(page.keywords ? [{ name: 'keywords', content: page.keywords }] : []),
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:image', content: page.image || defaultImage },
    { property: 'og:url', content: page.url || baseUrl },
    { property: 'og:type', content: page.type || 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: page.image || defaultImage },
  ];
};

// Canonical URL Helper
export const getCanonicalUrl = (path: string) => {
  const baseUrl = 'https://dmod-interior.com';
  return `${baseUrl}${path}`;
};

// Sitemap Entry Helper
export interface SitemapEntry {
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const getSitemapEntries = (): SitemapEntry[] => [
  { url: '/', changeFrequency: 'weekly', priority: 1.0 },
  { url: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { url: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { url: '/portfolio', changeFrequency: 'weekly', priority: 0.9 },
  { url: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { url: '/contact', changeFrequency: 'monthly', priority: 0.7 },
];

