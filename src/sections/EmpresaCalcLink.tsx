/* Faixa-link para a Calculadora de Meta (/calculadora).
   Aparece depois do Método — o empreendedor já entendeu a lógica, agora vê os números dele. */
import { Icon } from "../ui";

const navy = "#14181F";
const orange = "#D45A2A";

export function EmpresaCalcLink() {
  return (
    <section
      id="calculadora-cta"
      style={{ background: navy, color: "white", padding: "80px 0", borderTop: "1px solid rgba(255,255,255,.06)" }}
    >
      <div className="lp-container" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="calc-link-card"
          style={{
            background: "rgba(255,255,255,.03)",
            border: `1px solid ${orange}35`,
            borderRadius: 24,
            padding: "40px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div style={{ maxWidth: 600 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: orange,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                margin: "0 0 16px",
              }}
            >
              Ferramenta gratuita
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(26px, 3.4vw, 42px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: 0,
                fontWeight: 700,
                color: "white",
              }}
            >
              Quantas reuniões a sua meta exige?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: "16px 0 0" }}>
              Coloque sua meta e o ticket médio. A calculadora monta o funil de trás pra frente e mostra o volume que cada etapa precisa entregar.
            </p>
          </div>

          <a
            href="/calculadora"
            className="lp-cta-btn calc-link-btn"
            style={{
              background: orange,
              color: "white",
              border: 0,
              padding: "18px 28px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              fontFamily: "inherit",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            Abrir calculadora <Icon name="arrow-right" size="md" />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .calc-link-card { flex-direction: column !important; align-items: flex-start !important; padding: 32px 24px !important; }
          .calc-link-btn { width: 100% !important; justify-content: center !important; }
          #calculadora-cta { padding: 56px 0 !important; }
        }
      `}</style>
    </section>
  );
}
