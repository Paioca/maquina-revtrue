/* Global <head> defaults. Per-page extras vão em pages/<rota>/+Head.tsx. */

const SITE_URL = "https://revtrue.com.br";

const organizationLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Revtrue",
  legalName: "INSIDE SALES GALLI CONSULTORIA LTDA",
  taxID: "52.362.273/0001-80",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Operadores de Receita, em modelo fracionado, para startups tech B2B em fase de escala. Ocupamos a cadeira de receita ao lado do time, dirigimos forecast, pipeline, growth e dados, e instalamos motion replicável até passar a operação pro VP ou CRO definitivo.",
  founder: { "@id": `${SITE_URL}/#felipe-galli` },
  areaServed: { "@type": "Country", name: "Brasil" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  email: "contato@revtrue.com.br",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-41-99155-0646",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
    {
      "@type": "ContactPoint",
      email: "contato@revtrue.com.br",
      contactType: "customer support",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],
  // Organization.sameAs deve apontar para perfis da empresa (LinkedIn company,
  // Crunchbase, etc.) — não pessoais. Vazio até existir company page da Revtrue.
  sameAs: [],
};

const professionalServiceLd = {
  // Multi-tipo: ProfessionalService herda de LocalBusiness (não de Service),
  // então serviceType/provider/audience só são válidos quando o nó também é
  // declarado como Service. JSON-LD aceita array de @type.
  "@type": ["Service", "ProfessionalService"],
  "@id": `${SITE_URL}/#service`,
  name: "Revtrue — Operadores de Receita fracionado",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Modelo fracionado de Operadores de Receita para startups tech B2B em fase de escala. Cadeira de receita instalada dentro da operação, dirigindo estratégia, aquisição, conversão, dados e experimentação até o motion replicável estar instalado.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Brasil" },
  serviceType: [
    "Fractional revenue executives",
    "Operadores de Receita fracionados",
    "Revenue Operations (RevOps)",
    "Sales Operations",
    "Estratégia de receita B2B",
    "Forecast de vendas",
    "Gestão de pipeline",
    "Estruturação de processo comercial",
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Startups tech B2B em fase de escala — VC-backed (Seed ou Series A) ou bootstrap com tração consistente",
  },
};

const personLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#felipe-galli`,
  name: "Felipe Galli",
  jobTitle: "Founder",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/sobre`,
  alumniOf: [
    { "@type": "Organization", name: "Locaweb" },
    { "@type": "Organization", name: "Oracle" },
    { "@type": "Organization", name: "Resultados Digitais (RD Station)" },
  ],
  knowsAbout: [
    "Operadores de Receita fracionados",
    "Revenue Architecture",
    "Revenue Operations",
    "Vendas B2B consultivas",
    "Inside Sales",
    "Outbound enterprise",
    "Forecast de vendas",
    "Pipeline management",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Revenue Architecture (Winning by Design)" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Bowtie Analytics (Winning by Design)" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Receita Previsível" },
  ],
  sameAs: ["https://www.linkedin.com/in/felipegalli/"],
};

const websiteLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Revtrue",
  description: "Operadores de Receita em modelo fracionado para startups tech B2B em fase de escala",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "pt-BR",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationLd, professionalServiceLd, personLd, websiteLd],
};

export default function Head() {
  return (
    <>
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MFB4W4BK');` }} />

      <meta name="theme-color" content="#131D24" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Felipe Galli" />

      <link rel="icon" type="image/svg+xml" href="/icon-orange.svg" />

      {/* Open Graph defaults — sobrescritos por +Head.tsx de cada rota se preciso */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Revtrue" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta property="og:image:secure_url" content={`${SITE_URL}/og-image.jpg`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Revtrue — Operamos a sua receita." />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta name="twitter:image:alt" content="Revtrue — Operamos a sua receita." />

      {/* Preconnect aos terceiros usados pelo BookingModal (form HubSpot + Calendly).
          Reduz handshake quando o modal abre. */}
      <link rel="preconnect" href="https://api.hsforms.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://calendly.com" />

      {/* Preload Hongkong Bold + Medium (LCP candidates — headlines do hero/sections) */}
      <link
        rel="preload"
        href="/fonts/hongkong/Hongkong-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/hongkong/Hongkong-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* JSON-LD entidades raiz (Organization, Service+ProfessionalService, Person, WebSite) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
