/* EmpresaFelipe — Seção 4 · O Guia
 * StoryBrand: Felipe como guia (empatia + autoridade), não como herói
 * DotCom Secrets: Attractive Character — backstory que gera confiança */

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
      <div className="lp-container" style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="felipe-grid" style={{ display: "grid", gridTemplateColumns: "400px 1fr", gap: "0 80px", alignItems: "start" }}>

          {/* Coluna esquerda: foto + identidade */}
          <div>
            <div
              style={{
                width: "100%",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,.08)",
                marginBottom: 32,
              }}
            >
              <img
                src="/felipe.webp"
                alt="Felipe Galli — Founder da Revtrue"
                width={400}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                margin: 0,
                fontWeight: 700,
                color: "white",
              }}
            >
              Felipe Galli
            </h2>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: orange,
                fontWeight: 700,
                letterSpacing: ".08em",
                margin: "10px 0 32px",
              }}
            >
              Founder · Revtrue
            </p>

            <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.1)" }}>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.35)", margin: "0 0 14px", fontFamily: "var(--font-mono)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                Operou em
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", alignItems: "center" }}>
                {logos.map((l, i) => (
                  <span
                    key={l}
                    className="font-display"
                    style={{
                      fontSize: "clamp(16px, 1.8vw, 22px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "rgba(246,243,238,.65)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 24,
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

          {/* Coluna direita: o posicionamento como guia */}
          <div style={{ paddingTop: 8 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: orange,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                margin: "0 0 28px",
              }}
            >
              Por que eu consigo ver o que você não vê
            </p>

            <p style={{ fontSize: 20, lineHeight: 1.65, color: "rgba(255,255,255,.88)", margin: 0 }}>
              Quando você está dentro de uma operação, é difícil enxergar onde ela trava. Você está resolvendo problema de produto, de entrega, de time, de caixa. A venda fica em segundo plano até virar urgência.
            </p>
            <p style={{ fontSize: 20, lineHeight: 1.65, color: "rgba(255,255,255,.88)", margin: "24px 0 0" }}>
              Eu entro de fora. Com o olho de quem montou e operou processos comerciais em empresas que transformaram vendas em sistema, da prospecção ao forecast, do primeiro contato à renovação.
            </p>

            <div
              style={{
                margin: "40px 0",
                padding: "32px 36px",
                background: "rgba(255,255,255,.04)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "rgba(255,255,255,.35)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  margin: "0 0 16px",
                }}
              >
                O que eu trago
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "A visão de como uma operação de receita é projetada de verdade",
                  "O mapa de onde sua venda trava, baseado em número",
                  "O que mudar primeiro, na ordem que gera resultado mais rápido",
                  "Um processo que o seu time executa sem depender de mim pra andar",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ color: orange, flexShrink: 0, fontSize: 16, lineHeight: 1.5 }}>→</span>
                    <span style={{ fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.82)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                padding: "24px 28px",
                borderLeft: `3px solid ${orange}`,
                background: "rgba(255,255,255,.02)",
                borderRadius: "0 12px 12px 0",
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 23px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: cream,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Você é o herói da sua operação. Eu sou o cara que te mostra onde ela está travando e o que fazer pra destravar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .felipe-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #felipe { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
