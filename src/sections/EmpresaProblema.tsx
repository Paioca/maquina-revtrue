/* EmpresaProblema — Sintomas variados, mesma causa-raiz
 * Cada empreendedor reconhece o seu sintoma — o vilão é sempre ausência de estrutura comercial */

const navy = "#14181F";
const orange = "#D45A2A";

const sintomas = [
  "Gera lead, faz reunião, manda proposta. Fica no aguardo.",
  "Faturamento parado há meses — mesmo com mais movimento.",
  "Perde pra concorrente por preço porque não souber justificar o valor.",
  "Equipe cresceu, resultado não acompanhou.",
  "Tem produto bom mas não sabe como apresentar pra fechar.",
  "Cada venda é uma negociação do zero — não tem padrão.",
  "Vende, mas não sobra. Ticket baixo, margem espremida.",
  "Cliente some depois da proposta e você não sabe por quê.",
  "Depende de você pra vender — sem você, a operação trava.",
  "Tentou CRM, contratou vendedor, fez curso. Voltou ao mesmo ponto.",
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

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(38px, 5.5vw, 84px)",
            lineHeight: 0.97,
            letterSpacing: "-0.038em",
            margin: "0 0 16px",
            fontWeight: 700,
            color: "white",
            maxWidth: 900,
          }}
        >
          Qual desses você <span style={{ color: orange }}>reconhece?</span>
        </h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,.55)", margin: "0 0 64px", maxWidth: 600, lineHeight: 1.55 }}>
          Sintomas diferentes. Mesma causa. Em algum ponto da operação comercial falta estrutura.
        </p>

        {/* Lista de sintomas em duas colunas */}
        <div
          className="sintomas-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 64px" }}
        >
          {[sintomas.slice(0, 5), sintomas.slice(5)].map((col, ci) => (
            <ul key={ci} style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {col.map((s, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "22px 0",
                    borderBottom: "1px solid rgba(255,255,255,.07)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "rgba(255,255,255,.3)",
                      fontWeight: 600,
                      paddingTop: 4,
                      flexShrink: 0,
                      letterSpacing: ".04em",
                    }}
                  >
                    0{ci * 5 + i + 1}
                  </span>
                  <span style={{ fontSize: 18, lineHeight: 1.5, color: "rgba(255,255,255,.85)", fontWeight: 500 }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Diagnóstico da causa-raiz */}
        <p
          className="font-display"
          style={{
            fontSize: "clamp(24px, 3vw, 40px)",
            lineHeight: 1.2,
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "white",
            maxWidth: 900,
            marginTop: 64,
            marginBottom: 0,
          }}
        >
          Se dois ou mais aparecem juntos, você não tem problema de esforço.{" "}
          <span style={{ color: orange }}>Você tem problema de estrutura comercial.</span>
        </p>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .sintomas-grid { grid-template-columns: 1fr !important; }
          #problema { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
