/* Página /sobre — institucional curta. Hero · Os Sócios. */
import { partners } from "../partners";
import { Icon } from "../ui";
import { useSeo } from "../lib/useSeo";

const navy = "#14181F";
const navySoft = "#1E242E";
const orange = "#E8693B";
const cream = "#F6F3EE";

/* ---------- Seção 1: Hero ---------- */
function Hero() {
  return (
    <section
      style={{
        background: navy,
        color: cream,
        padding: "180px 0 120px",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: orange,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Sobre
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(48px, 6vw, 72px)",
            lineHeight: 1.0,
            letterSpacing: "-0.035em",
            margin: 0,
            fontWeight: 700,
            color: cream,
          }}
        >
          A Revtrue.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(246,243,238,.8)",
            maxWidth: 640,
            marginTop: 28,
          }}
        >
          Operação de Revenue as a Service para empresas B2B. A gente entra na
          operação de marketing e vendas do cliente, encontra o maior gargalo de
          receita e ataca com AI, dados e método.
        </p>
      </div>
    </section>
  );
}

/* ---------- Seção 2: Os Sócios (2 cards) ---------- */
type CardData = {
  portrait?: string;
  initials: "FG" | "PH";
  companies: string;
  name: string;
  role: string;
  bio: string;
  areas: string;
  linkedin: string;
};

const felipe = partners.find((p) => p.id === "felipe")!;
const ph = partners.find((p) => p.id === "matheusph")!;

const cards: CardData[] = [
  {
    portrait: felipe.portrait,
    initials: "FG",
    companies: "ORACLE · LOCAWEB · RD STATION",
    name: felipe.name,
    role: "Vendas",
    bio: "Formado em Ciência da Computação. 14 anos liderando times comerciais em SMB e Enterprise, com passagens por Oracle, Locaweb, Resultados Digitais e Celcoin. Certificado pela Winning by Design e Receita Previsível.",
    areas: "Vendas B2B · Revenue Architecture · Pipeline & Forecast",
    linkedin: felipe.linkedin,
  },
  {
    portrait: ph.portrait,
    initials: "PH",
    companies: "EDUCBANK · HEROSPARK",
    name: ph.name,
    role: "Growth, Marketing e RevOps",
    bio: "Engenheiro Mecânico pela Universidade Federal do Paraná. 12 anos de experiência em Growth, com passagens por HeroSpark e Educbank como Diretor de Growth. Atua em PLG e SMB, cobrindo posicionamento, dados, RevOps e IA aplicada a Growth.",
    areas: "Growth · Marketing · RevOps · CRM",
    linkedin: ph.linkedin,
  },
];

function PartnerCard({ data }: { data: CardData }) {
  return (
    <article
      style={{
        background: navySoft,
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Slot da foto / placeholder */}
      <div
        style={{
          background: orange,
          minHeight: 340,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.portrait ? (
          <img
            src={data.portrait}
            alt={`Retrato de ${data.name}`}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              position: "absolute",
              inset: 0,
              display: "block",
            }}
          />
        ) : (
          <span
            className="font-display"
            style={{
              fontSize: "clamp(96px, 11vw, 168px)",
              fontWeight: 700,
              color: cream,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {data.initials}
          </span>
        )}
      </div>

      {/* Corpo */}
      <div
        style={{
          padding: "40px 40px 36px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          flex: 1,
        }}
      >
        {/* 1. Credencial agregada — peso primário */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 19,
            fontWeight: 700,
            color: orange,
            letterSpacing: ".05em",
            lineHeight: 1.3,
          }}
        >
          {data.companies}
        </div>

        {/* 2. Nome (peso secundário) + 3. Função */}
        <div>
          <h2
            className="font-display"
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: cream,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            {data.name}
          </h2>
          <div
            style={{
              marginTop: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 700,
              color: "rgba(246,243,238,.6)",
              letterSpacing: ".05em",
              textTransform: "uppercase",
            }}
          >
            {data.role}
          </div>
        </div>

        {/* 4. Bio */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "rgba(246,243,238,.8)",
            margin: 0,
          }}
        >
          {data.bio}
        </p>

        {/* 5. Divisória + 6. Áreas */}
        <div style={{ borderTop: "1px solid rgba(246,243,238,.1)", paddingTop: 22 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 700,
              color: "rgba(246,243,238,.5)",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Áreas
          </div>
          <div style={{ fontSize: 14, color: "rgba(246,243,238,.8)", lineHeight: 1.5 }}>
            {data.areas}
          </div>
        </div>

        {/* 7. LinkedIn — canto inferior direito */}
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${data.name}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid rgba(246,243,238,.15)",
              color: "rgba(246,243,238,.6)",
              textDecoration: "none",
            }}
          >
            <Icon name="linkedin" size="md" />
          </a>
        </div>
      </div>
    </article>
  );
}

function PartnersSection() {
  return (
    <section
      style={{
        background: navy,
        color: cream,
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: orange,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          §01 · Os Sócios
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            margin: 0,
            fontWeight: 700,
            color: cream,
            marginBottom: 56,
          }}
        >
          Felipe Galli e Matheus PH.
        </h2>

        <div
          className="sobre-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {cards.map((c) => (
            <PartnerCard key={c.initials} data={c} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .sobre-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Página completa ---------- */
export function Sobre() {
  useSeo({
    title: "Sobre · RevTrue",
    description:
      "Time com passagem por Oracle, RD Station, Locaweb, Educbank e HeroSpark. Liderança sênior direta em cada projeto da RevTrue.",
    canonical: "/sobre",
    robots: "index, follow, max-image-preview:large",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://revtrue.com.br/sobre#aboutpage",
      url: "https://revtrue.com.br/sobre",
      name: "Sobre · RevTrue",
      description:
        "Time da RevTrue: experiência sênior em Oracle, RD Station, Locaweb, Educbank e HeroSpark aplicada em Revenue Architecture e RevOps para B2B.",
      inLanguage: "pt-BR",
      isPartOf: { "@id": "https://revtrue.com.br/#website" },
      about: { "@id": "https://revtrue.com.br/#organization" },
      mainEntity: { "@id": "https://revtrue.com.br/#organization" },
    },
  });

  return (
    <main>
      <Hero />
      <PartnersSection />
    </main>
  );
}
