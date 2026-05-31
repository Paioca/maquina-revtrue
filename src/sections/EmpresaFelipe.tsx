/* EmpresaFelipe — Seção 2.5 · Quem é o Felipe
 * Credencial como origem do método, não como currículo */

const navy = "#14181F";
const orange = "#D45A2A";
const cream = "#F6F3EE";

const logos = ["Oracle", "RD Station", "Locaweb"];

export function EmpresaFelipe() {
  return (
    <section
      id="felipe"
      style={{
        background: navy,
        color: "white",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <div className="felipe-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px", alignItems: "start" }}>

          {/* Coluna esquerda */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: orange,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Quem vai sentar com você
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
                margin: 0,
                fontWeight: 700,
                color: "white",
              }}
            >
              Felipe<br />Galli
            </h2>

            {/* Logo bar das empresas */}
            <div
              style={{
                marginTop: 40,
                paddingTop: 28,
                borderTop: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", margin: "0 0 16px", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>
                LINHA DE FRENTE EM
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", alignItems: "center" }}>
                {logos.map((l, i) => (
                  <span
                    key={l}
                    className="font-display"
                    style={{
                      fontSize: "clamp(18px, 2vw, 26px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "rgba(246,243,238,.75)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 28,
                    }}
                  >
                    {l}
                    {i < logos.length - 1 && (
                      <span aria-hidden="true" style={{ color: "rgba(246,243,238,.2)", fontWeight: 400 }}>·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna direita */}
          <div style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: 0 }}>
              Passei anos na linha de frente das operações comerciais da Oracle e da RD Station — duas das estruturas de vendas mais sofisticadas do Brasil e do mundo.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: "24px 0 0" }}>
              Aprendi na prática como as melhores empresas do planeta montam o processo comercial: como definem o que um vendedor precisa fazer em cada etapa, como medem o que importa, como constroem uma venda que não depende de quem está na cadeira.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: "24px 0 0" }}>
              Depois disso, trouxe esse mesmo método pra dentro de empresas menores. Distribuidoras, escritórios, prestadores de serviço. Empresas que nunca tiveram acesso a esse nível de estrutura, mas que precisam exatamente disso pra crescer sem virar escrava do talento de um ou dois.
            </p>
            <div
              style={{
                marginTop: 36,
                padding: "22px 26px",
                background: "rgba(255,255,255,.04)",
                borderLeft: `3px solid ${orange}`,
                borderRadius: "0 12px 12px 0",
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: cream,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                É o que eu faço na sessão de diagnóstico.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .felipe-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #felipe { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
