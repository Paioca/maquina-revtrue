/* EmpresaProblema — Seção 3 · O Problema
 * Reframe: o vilão é a ausência de processo, não o vendedor */

const navy = "#14181F";
const navySoft = "#1E232C";
const orange = "#D45A2A";

const causas = [
  {
    n: "01",
    titulo: "Sem etapas claras",
    desc: "Cada vendedor inventa o processo do jeito dele. Impossível melhorar o que não está definido.",
  },
  {
    n: "02",
    titulo: "Sem número certo pra acompanhar",
    desc: "Você gerencia no feeling. Sem métrica, a decisão fica na intuição — e a intuição não escala.",
  },
  {
    n: "03",
    titulo: "Sem critério de contratação",
    desc: "Você repete o mesmo erro com a próxima pessoa. O problema não estava em quem vende.",
  },
];

export function EmpresaProblema() {
  return (
    <section
      id="problema"
      style={{
        background: navySoft,
        color: "white",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        {/* Headline principal */}
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(40px, 6.5vw, 100px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: 0,
            fontWeight: 700,
            maxWidth: 1000,
            color: "white",
          }}
        >
          Você não tem problema<br />
          de vendedor.<br />
          <span style={{ color: orange }}>Você tem problema de estrutura.</span>
        </h2>

        {/* Frase de clareza */}
        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 64px",
          }}
          className="problema-intro-grid"
        >
          <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: 0 }}>
            Quando um vendedor não bate meta, pode ser ele. Quando o time inteiro não bate, é a empresa.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: 0 }}>
            A maioria dos donos tenta resolver isso contratando mais gente, aumentando comissão ou comprando um CRM novo. Funciona por um mês, dois. Depois volta pro mesmo lugar.
          </p>
        </div>

        {/* Três causas */}
        <div
          className="problema-causas"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {causas.map((c) => (
            <div
              key={c.n}
              style={{
                padding: "32px 28px",
                background: "rgba(255,255,255,.04)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: orange,
                  lineHeight: 0.9,
                  display: "block",
                  marginBottom: 20,
                }}
              >
                {c.n}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  margin: "0 0 14px",
                  color: "white",
                }}
              >
                {c.titulo}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: 0 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fechamento empático */}
        <div
          style={{
            marginTop: 56,
            maxWidth: 880,
            padding: "32px 36px",
            background: `${orange}12`,
            borderRadius: 16,
            border: `1px solid ${orange}35`,
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "clamp(22px, 2.5vw, 32px)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              color: "white",
              margin: 0,
            }}
          >
            Não é culpa sua. Ninguém te ensinou a montar isso.{" "}
            <span style={{ color: orange }}>O "depois" chegou.</span>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: "16px 0 0" }}>
            Você cresceu resolvendo o problema do produto, da operação, da entrega. A venda ficou pra depois.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problema-intro-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .problema-causas { grid-template-columns: 1fr !important; }
          #problema { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
