/* EmpresaEpiphany — Epiphany Bridge ampla
 * A virada: você não está errando — falta a estrutura que ninguém te ensinou a montar */

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
      <div className="lp-container" style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="epiphany-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 100px", alignItems: "start" }}>

          {/* Coluna esquerda: a história */}
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
              O que eu aprendi operando em escala
            </p>

            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: 0 }}>
              Nas operações comerciais da Oracle e da RD Station, aprendi como as melhores empresas do mundo montam a máquina de receita: oferta, jornada, processo, time, dados. Tudo projetado pra funcionar junto.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: "24px 0 0" }}>
              Quando comecei a trabalhar com empresas menores, vi um padrão que se repete independente do setor, do tamanho ou do produto:
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
                Empreendedores que não crescem raramente têm problema de produto. Têm problema de estrutura comercial. Ninguém nunca sentou com eles pra montar isso direito.
              </p>
            </div>

            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: 0 }}>
              A operação comercial cresceu no improviso, no feeling, na tentativa e erro. Oferta, posicionamento, jornada, processo, comunicação. Ninguém projetou. Ninguém montou.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: "24px 0 0" }}>
              E improviso tem teto. Estrutura, não.
            </p>
          </div>

          {/* Coluna direita: as duas realidades */}
          <div style={{ paddingTop: 8 }}>

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
                  color: "rgba(255,255,255,.3)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  margin: "0 0 18px",
                }}
              >
                Sem estrutura
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Reunião de pipeline vira conversa de estimativa",
                  "Proposta sai sem saber se vai fechar",
                  "Não sabe em que etapa o negócio travou",
                  "Não consegue replicar o que o melhor vendedor faz",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "rgba(255,255,255,.25)", fontSize: 14, flexShrink: 0, paddingTop: 2 }}>—</span>
                    <span style={{ fontSize: 16, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

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
                Com estrutura
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Venda previsível. Você sabe o que esperar.",
                  "Conversão sobe com o mesmo volume de lead",
                  "Time executa sem depender de improviso",
                  "Você sabe onde intervir quando o número cai",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: orange, fontSize: 14, flexShrink: 0, paddingTop: 2 }}>→</span>
                    <span style={{ fontSize: 16, color: "rgba(255,255,255,.85)", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
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
                Montar o que está faltando, uma vez, muda o que o esforço sozinho nunca vai mudar.
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
