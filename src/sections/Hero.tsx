/* Hero — reposicionamento boutique
 * Headline: "Operamos a sua receita."
 * Sub: descritor institucional canônico (Operadores de Receita, em modelo fracionado).
 * CTA: "Agendar uma sessão". */
import { Icon } from "../ui";

const navy = "#14181F";
const navySoft = "#1E232C";
const orange = "#D45A2A";

export function Hero() {
  return (
    <section
      id="hero"
      style={{ position: "relative", padding: "100px 40px 120px", overflow: "hidden", background: navy, color: "white" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-10%",
          top: "20%",
          width: 600,
          height: 600,
          borderRadius: 999,
          background: `radial-gradient(circle, ${orange}3a 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 20px",
            background: navySoft,
            color: orange,
            borderRadius: 99,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: ".15em",
            textTransform: "uppercase",
            marginBottom: 40,
            border: `1px solid ${orange}40`,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 99, background: orange }} />
          Operadores de Receita
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: "clamp(56px, 9.5vw, 156px)",
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            margin: 0,
            fontWeight: 700,
            color: "white",
            maxWidth: 1100,
          }}
        >
          Operamos<br />a sua<br />receita.
        </h1>

        <p
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: "rgba(255,255,255,.72)",
            margin: "44px 0 0",
            maxWidth: 700,
          }}
        >
          Operadores de Receita, em modelo fracionado, para startups tech B2B em fase de escala. VC-backed ou bootstrap consistente.
        </p>

        <a
          href="#processo"
          style={{
            marginTop: 40,
            background: orange,
            color: "white",
            border: 0,
            padding: "17px 28px",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            fontFamily: "inherit",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          Agendar uma sessão <Icon name="arrow-right" size="sm" />
        </a>
      </div>
    </section>
  );
}
