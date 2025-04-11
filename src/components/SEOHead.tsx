
import React from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords,
  ogImage = 'https://example.com/pawhaven-og-image.jpg',
  ogUrl = 'https://pawhaven.com'
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PawHaven",
            "image": ogImage,
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Pet Care Lane",
              "addressLocality": "Pawsville",
              "addressRegion": "CA",
              "postalCode": "90210",
              "addressCountry": "US"
            },
            "telephone": "+11234567890",
            "openingHours": "Mo-Su 08:00-20:00",
            "priceRange": "$$",
            "sameAs": [
              "https://www.facebook.com/pawhaven",
              "https://www.instagram.com/pawhaven",
              "https://twitter.com/pawhaven"
            ]
          })
        }}
      />
    </>
  );
};

export default SEOHead;
