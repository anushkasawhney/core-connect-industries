import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://duponindustrial.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({ title, description, canonical, type = "website", image, jsonLd }: SEOProps) => {
  const fullTitle = title === "Home" 
    ? "Dupon Industrial Enterprises | Industrial Hoses, Gaskets & Rubber Solutions"
    : `${title} | Dupon Industrial Enterprises`;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const ogImage = image || DEFAULT_IMAGE;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dupon Industrial Enterprises",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    description: "Trusted supplier of industrial hoses, gaskets, rubber mouldings and sealing solutions for over 40 years across India.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "4-3-82, First Floor, Hill Street, Ranigunj",
        addressLocality: "Secunderabad",
        addressRegion: "Telangana",
        postalCode: "500003",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "H.No.7-109/1, Kompally, Near Dhola-ri-Dhani",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500100",
        addressCountry: "IN",
      },
    ],
    telephone: ["+91-98480-18090", "+91-81798-25090"],
    email: "info@duponindustrial.com",
    foundingDate: "1984",
    areaServed: "IN",
    sameAs: [],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dupon Industrial Enterprises" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd || organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
