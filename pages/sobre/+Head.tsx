const SITE_URL = "https://revtrue.com.br";

const aboutPageLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/sobre#aboutpage`,
  url: `${SITE_URL}/sobre`,
  name: "Sobre · RevTrue",
  description:
    "Time da RevTrue: experiência sênior em Oracle, RD Station, Locaweb, Educbank e HeroSpark aplicada em Revenue Architecture e RevOps para B2B.",
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function HeadSobre() {
  return (
    <>
      <link rel="canonical" href={`${SITE_URL}/sobre`} />
      <meta property="og:url" content={`${SITE_URL}/sobre`} />
      <meta property="og:title" content="Sobre · RevTrue" />
      <meta
        property="og:description"
        content="Time com passagem por Oracle, RD Station, Locaweb, Educbank e HeroSpark."
      />
      <meta name="twitter:title" content="Sobre · RevTrue" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
      />
    </>
  );
}
