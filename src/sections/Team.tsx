/* §07 O Time — minimalista
 * Headline: senioridade na cadeira.
 * Logo bar das empresas. Sem texto intermediário, sem foto, sem nomes. Link pra /sobre. */

const navy = "#14181F";
const orange = "#D45A2A";
const cream = "#F6F3EE";

const logos = ["Oracle", "RD Station", "Locaweb", "HeroSpark", "Educbank"];

export function Team() {
  return (
    <section
      id="time"
      style={{
        background: navy,
        color: cream,
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(40px, 5.5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            margin: 0,
            fontWeight: 700,
            color: cream,
            maxWidth: 1100,
            marginBottom: 64,
          }}
        >
          Operada por quem montou <span style={{ color: orange }}>máquina de receita em escala.</span>
        </h2>

        {/* Logo bar */}
        <div
          className="rev-logo-bar"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "32px 40px",
            paddingTop: 24,
            paddingBottom: 24,
            borderTop: "1px solid rgba(255,255,255,.1)",
            borderBottom: "1px solid rgba(255,255,255,.1)",
          }}
        >
          {logos.map((l, i) => (
            <span
              key={l}
              className="font-display"
              style={{
                fontSize: "clamp(22px, 2.6vw, 32px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "rgba(246,243,238,.85)",
                display: "inline-flex",
                alignItems: "center",
                gap: 40,
              }}
            >
              {l}
              {i < logos.length - 1 && (
                <span aria-hidden="true" style={{ color: "rgba(246,243,238,.25)", fontWeight: 400 }}>·</span>
              )}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 36 }}>
          <a
            href="/sobre"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 16,
              fontWeight: 500,
              color: orange,
              textDecoration: "none",
            }}
          >
            <span aria-hidden="true">→</span>
            <span style={{ borderBottom: `1px solid ${orange}`, paddingBottom: 2 }}>
              Conheça os sócios
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
