/* EmpresaOQueFazemos — Seção 5 · O Método (Value Ladder)
 * DotCom Secrets: Value Ladder — três degraus claros
 * StoryBrand: o plano de 3 passos que reduz fricção
 * $100M Offers: dream outcome ao final de cada fase */

const navySoft = "#1E232C";
const orange = "#D45A2A";

const fases = [
  {
    n: "01",
    titulo: "Diagnóstico",
    subtitulo: "Onde o dinheiro está escapando",
    desc: "Olhamos pra onde a conversão está vazando: oferta, posicionamento, jornada do cliente, mix de produto, comunicação. O diagnóstico é baseado em número e no que o cliente real está dizendo.",
    entrega: "Documento escrito com o diagnóstico completo e as prioridades na ordem certa.",
    destaque: false,
  },
  {
    n: "02",
    titulo: "Estruturação",
    subtitulo: "Montar o que está faltando",
    desc: "Construímos a estrutura que a sua operação precisa pra converter: oferta que fecha, jornada sem furo, posicionamento que justifica o preço, ferramental que sustenta a execução.",
    entrega: "Uma operação comercial que sabe o que oferecer, como apresentar e como conduzir o cliente até o sim.",
    destaque: true,
  },
  {
    n: "03",
    titulo: "Operação",
    subtitulo: "Fazer funcionar de verdade",
    desc: "Trabalhamos dentro da operação até a estrutura estar rodando. Não entregamos um documento e sumimos. Ficamos até o resultado aparecer nos números: conversão, ticket médio, previsibilidade.",
    entrega: "Uma máquina de receita que funciona independente de improviso ou de quem está na cadeira.",
    destaque: false,
  },
];

export function EmpresaOQueFazemos() {
  return (
    <section
      id="metodo"
      style={{
        background: navySoft,
        color: "white",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div className="lp-container" style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
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
            Como trabalhamos
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(38px, 5.5vw, 84px)",
              lineHeight: 0.97,
              letterSpacing: "-0.038em",
              margin: 0,
              fontWeight: 700,
              color: "white",
              maxWidth: 900,
            }}
          >
            Três fases. Do diagnóstico à{" "}
            <span style={{ color: orange }}>operação instalada.</span>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,.65)", maxWidth: 680, marginTop: 24, marginBottom: 0 }}>
            Cada fase tem uma entrega clara. Você sabe exatamente onde está e o que acontece em seguida.
          </p>
        </div>

        <div
          className="metodo-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {fases.map((f) => (
            <div
              key={f.n}
              style={{
                padding: "36px 32px",
                background: f.destaque ? `${orange}14` : "rgba(255,255,255,.03)",
                borderRadius: 20,
                border: f.destaque ? `1px solid ${orange}50` : "1px solid rgba(255,255,255,.08)",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "relative",
              }}
            >
              {f.destaque && (
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: 32,
                    background: orange,
                    color: "white",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    padding: "4px 14px",
                    borderRadius: 99,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Núcleo do trabalho
                </div>
              )}

              <span
                className="font-display"
                style={{
                  fontSize: 60,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: f.destaque ? orange : "rgba(255,255,255,.2)",
                  lineHeight: 0.9,
                  display: "block",
                  marginBottom: 24,
                }}
              >
                {f.n}
              </span>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(22px, 2.2vw, 28px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                {f.titulo}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: orange,
                  fontWeight: 600,
                  letterSpacing: ".06em",
                  margin: "8px 0 20px",
                  textTransform: "uppercase",
                }}
              >
                {f.subtitulo}
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,.72)", margin: "0 0 28px", flex: 1 }}>
                {f.desc}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,.1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "rgba(255,255,255,.35)",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    margin: "0 0 8px",
                  }}
                >
                  Entrega
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: f.destaque ? orange : "rgba(255,255,255,.75)", margin: 0, fontWeight: f.destaque ? 600 : 400 }}>
                  {f.entrega}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            padding: "28px 36px",
            background: "rgba(255,255,255,.03)",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,.07)",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
          className="metodo-nota"
        >
          <span aria-hidden="true" style={{ color: orange, fontSize: 20, flexShrink: 0 }}>↗</span>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: "rgba(255,255,255,.7)", margin: 0 }}>
            Você não precisa contratar as três fases de uma vez. Muitos clientes começam pelo Diagnóstico. A partir do mapa, decidem como e quando avançar. Sem amarra. Sem contrato de longo prazo imposto.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .metodo-grid { grid-template-columns: 1fr !important; }
          .metodo-nota { flex-direction: column !important; }
          #metodo { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
