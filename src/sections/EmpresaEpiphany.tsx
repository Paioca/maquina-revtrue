/* EmpresaEpiphany — Epiphany Bridge
 * Ângulo: o empreendedor que faz tudo certo e mesmo assim não converte
 * Quebra a crença: "preciso de mais lead" → "preciso de estrutura pra fechar" */

const navy = "#14181F";
const navySoft = "#1E232C";
const orange = "#D45A2A";

export function EmpresaEpiphany() {
  return (
    <section
      id="historia"
      style={{
        background: navySoft,
        color: "white",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <div className="epiphany-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 100px", alignItems: "start" }}>

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
                margin: "0 0 32px",
              }}
            >
              O padrão que eu vejo se repetir
            </p>

            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: 0 }}>
              A maioria dos empreendedores que chega até mim não tem problema de geração de demanda. Tem reunião. Tem lead. Às vezes tem uma fila de interessados.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: "24px 0 0" }}>
              O problema está no que acontece depois que o interesse aparece.
            </p>

            <div
              style={{
                margin: "36px 0",
                padding: "32px 36px",
                borderLeft: `4px solid ${orange}`,
                background: "rgba(255,255,255,.03)",
                borderRadius: "0 16px 16px 0",
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(20px, 2.4vw, 30px)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                  color: "white",
                  margin: 0,
                }}
              >
                O lead chega. A conversa acontece. A proposta sai. E aí — silêncio. Ou um "vou pensar" que nunca volta.
              </p>
            </div>

            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: 0 }}>
              Não é coincidência. Não é "o mercado difícil". É que a venda não foi estruturada pra fechar. A oferta não está clara. A jornada tem buraco. O posicionamento não justifica o preço.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: "24px 0 0" }}>
              E enquanto isso, você assiste outros — com produto pior, com menos acesso, com menos tempo de mercado — fechando mais do que você.
            </p>
          </div>

          {/* Coluna direita */}
          <div style={{ paddingTop: 8 }}>

            {/* O loop que não para */}
            <div
              style={{
                padding: "32px 28px",
                background: "rgba(255,255,255,.04)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.08)",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "rgba(255,255,255,.35)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  margin: "0 0 18px",
                }}
              >
                O loop que não para
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Gera mais conteúdo pra gerar mais lead",
                  "Faz mais reunião",
                  "Manda mais proposta",
                  "Fica no aguardo",
                  "Volta pro início",
                ].map((item, i, arr) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ color: i === arr.length - 1 ? orange : "rgba(255,255,255,.3)", fontSize: 14, flexShrink: 0 }}>
                      {i === arr.length - 1 ? "↩" : "→"}
                    </span>
                    <span style={{ fontSize: 16, color: i === arr.length - 1 ? orange : "rgba(255,255,255,.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* A crença que precisa mudar */}
            <div
              style={{
                padding: "32px 28px",
                background: `${orange}14`,
                borderRadius: 16,
                border: `1px solid ${orange}45`,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: orange,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  margin: "0 0 18px",
                }}
              >
                O que muda quando você tem estrutura
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(17px, 1.7vw, 21px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "white",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                O mesmo lead que hoje responde "vou pensar" começa a fechar. Não porque você ficou melhor em convencer — mas porque a jornada foi projetada pra isso.
              </p>
            </div>

            <div
              style={{
                marginTop: 20,
                padding: "20px 24px",
                background: "rgba(255,255,255,.03)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.6)", margin: 0 }}>
                Não é sobre trabalhar mais. É sobre montar o caminho certo pra que o cliente chegue na decisão com clareza — e diga sim.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .epiphany-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #historia { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
