import { SITE_CONTENT } from "@/data/content";

export const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONTENT.company.name,
    "description": SITE_CONTENT.company.description,
    "url": "https://snisindia.in/",
    "logo": "https://snisindia.in/src/assets/snis-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SITE_CONTENT.contact.phone,
      "contactType": "customer service",
      "email": SITE_CONTENT.contact.email,
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
