/* EmpresaProblema — Seção 3 · O Vilão
 * StoryBrand: vilão externo (ausência de sistema) + problema interno (frustração) + filosófico
 * $100M Offers: amplia o problema antes de oferecer a solução */

const navy = "#14181F";
const orange = "#D45A2A";

const sinais = [
  { n: "01", texto: "Meta que não fecha, mesmo com time crescendo." },
  { n: "02", texto: "Vendedor novo repete o resultado do anterior." },
  { n: "03", texto: "CRM comprado, mas a operação ainda roda no feeling." },
  { n: "04", texto: "Você sabe quanto vendeu, mas não sabe onde perdeu." },
  { n: "05", texto: "Reunião de pipeline vira conversa de estimativa." },
  { n: "06", texto: "Resultado depende de quem está na cadeira naquele mês." },
];

export function EmpresaProblema() {
  return (
    <section
      id="problema"
      style={{
        background: navy,
        color: "white",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <div className="problema-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px", alignItems: "start" }}>

          {/* Coluna esquerda */}
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(40px, 6vw, 92px)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                margin: 0,
                fontWeight: 700,
                color: "white",
              }}
            >
              O problema<br />
              não é quem<br />
              <span style={{ color: orange }}>vende.<br />É como.</span>
            </h2>

            <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.75)", margin: "44px 0 0", maxWidth: 480 }}>
              Quando um vendedor não performa, pode ser ele. Quando o time todo não performa, a causa está acima das pessoas — está em como a operação foi montada.
            </p>

            <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.75)", margin: "20px 0 0", maxWidth: 480 }}>
              A solução não é trocar quem vende. É projetar como a venda deve funcionar — com etapas definidas, critérios claros e números que guiam decisão.
            </p>
          </div>

          {/* Coluna direita: sinais */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "rgba(255,255,255,.4)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                margin: "0 0 32px",
              }}
            >
              Reconhece algum desses?
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {sinais.map((s, i) => (
                <li
                  key={s.n}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "20px 0",
                    borderBottom: i < sinais.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: orange,
                      fontWeight: 700,
                      letterSpacing: ".06em",
                      paddingTop: 3,
                      flexShrink: 0,
                    }}
                  >
                    {s.n}
                  </span>
                  <span style={{ fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.82)", fontWeight: 500 }}>
                    {s.texto}
                  </span>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: 32,
                padding: "22px 26px",
                background: `${orange}12`,
                borderRadius: 12,
                border: `1px solid ${orange}38`,
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: orange,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Se dois ou mais aparecem juntos, você não tem problema de execução. Você tem problema de estrutura.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problema-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          #problema { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
