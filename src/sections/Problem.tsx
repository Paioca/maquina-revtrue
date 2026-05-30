/* §01 Problema · MANTÉM copy original conforme documento boutique */

const navy = "#14181F";
const orange = "#D45A2A";

const sinais = [
  "Receita estagnou depois da rodada.",
  "Contratou mais vendedor, percentual que bate meta caiu.",
  "Longe da meta que destrava a próxima rodada.",
  "Vendas ainda passam pelo founder.",
  "Não consegue validar novos canais.",
  "Churn corroendo crescimento.",
  "Hire de VP veio antes da operação estar pronta.",
  "Próxima rodada exige replicabilidade que ainda não tem.",
];

export function Problem() {
  return (
    <section id="problema" style={{ background: navy, color: "white", padding: "120px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            margin: 0,
            fontWeight: 700,
            maxWidth: 980,
            color: "white",
          }}
        >
          O time cresceu. <span style={{ color: orange }}>A receita não acompanhou.</span>
        </h2>
        <div className="rev-problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 64px", marginTop: 64 }}>
          {[sinais.slice(0, 4), sinais.slice(4, 8)].map((col, ci) => (
            <ul key={ci} style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {col.map((s, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 18,
                    padding: "22px 0",
                    borderBottom: "1px solid rgba(255,255,255,.1)",
                    fontSize: 19,
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "rgba(255,255,255,.65)",
                      fontWeight: 600,
                      paddingTop: 4,
                    }}
                  >
                    0{ci * 4 + i + 1}
                  </span>
                  <span style={{ color: "white", fontWeight: 500 }}>{s}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p
          className="font-display"
          style={{
            fontSize: "clamp(28px, 3.4vw, 40px)",
            lineHeight: 1.2,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "white",
            maxWidth: 980,
            marginTop: 64,
            marginBottom: 0,
          }}
        >
          Quando dois ou mais aparecem juntos, <span style={{ color: orange, fontWeight: 700 }}>a próxima rodada vira problema</span>.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rev-problem-grid { grid-template-columns: 1fr !important; }
          #problema { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
