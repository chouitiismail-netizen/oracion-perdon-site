// JSON-LD Schema generators for SEO
// Centralized schema utilities for structured data

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oracion-perdon-site.vercel.app";

export const SITE_NAME = "Oraciones por el perdón";
export const SITE_DESCRIPTION = "Oraciones y reflexiones para pedir perdón, perdonar de corazón y volver a empezar con paz y misericordia.";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  keywords?: string[];
}

// WebSite schema for homepage
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": SITE_NAME,
    "description": SITE_DESCRIPTION,
    "inLanguage": "es",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// Organization schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": SITE_NAME,
    "url": baseUrl,
    "description": SITE_DESCRIPTION,
    "sameAs": [
      "https://www.jesuscontigo.org/"
    ]
  };
}

// BreadcrumbList schema for article pages
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Article schema for prayer pages
export function generateArticleSchema(props: ArticleSchemaProps) {
  const { title, description, slug, publishedAt, updatedAt, keywords } = props;
  const articleUrl = `${baseUrl}/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}/#article`,
    "headline": title,
    "description": description,
    "url": articleUrl,
    "datePublished": publishedAt,
    "dateModified": updatedAt,
    "inLanguage": "es",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    },
    ...(keywords && keywords.length > 0 && { "keywords": keywords.join(", ") })
  };
}

// WebPage schema for legal pages
export function generateWebPageSchema(title: string, description: string, slug: string) {
  const pageUrl = `${baseUrl}/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    "url": pageUrl,
    "name": title,
    "description": description,
    "inLanguage": "es",
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    }
  };
}

// Combined schema for homepage
export function generateHomePageSchemas() {
  return [
    generateWebSiteSchema(),
    generateOrganizationSchema()
  ];
}

// Combined schema for article pages
export function generateArticlePageSchemas(
  article: ArticleSchemaProps,
  category: string
) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Inicio", url: baseUrl },
    { name: category.charAt(0).toUpperCase() + category.slice(1), url: `${baseUrl}/#${category}` },
    { name: article.title, url: `${baseUrl}/${article.slug}` }
  ];

  return [
    generateArticleSchema(article),
    generateBreadcrumbSchema(breadcrumbs)
  ];
}

// Combined schema for legal pages
export function generateLegalPageSchemas(title: string, description: string, slug: string) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Inicio", url: baseUrl },
    { name: title, url: `${baseUrl}/${slug}` }
  ];

  return [
    generateWebPageSchema(title, description, slug),
    generateBreadcrumbSchema(breadcrumbs)
  ];
}
