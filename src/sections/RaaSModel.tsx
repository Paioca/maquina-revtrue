/* §04 O Modelo — texto intro + tabela comparativa VP vs Operadores */

const navy = "#14181F";
const navySoft = "#1E232C";
const orange = "#D45A2A";

const rows = [
  {
    k: "Tempo até impacto",
    a: "4 a 6 meses de ramp antes do primeiro resultado consistente",
    b: "Assinou, começamos a operar. Sem ramp de consultor.",
  },
  {
    k: "Risco",
    a: "Hire errado custa 12 a 18 meses e comp na casa dos sete dígitos",
    b: "Reversível. Sem amarra contratual de longo prazo.",
  },
  {
    k: "Cobertura",
    a: "Um vetor por vez: vendas, ou growth, ou RevOps",
    b: "A receita inteira: arquitetura, vendas, growth, dados",
  },
  {
    k: "Saída",
    a: "Cadeira definitiva. Sucessão é problema futuro.",
    b: "Cadeira de transição. Ocupamos até instalar o motion, depois entregamos pro VP ou CRO definitivo.",
  },
];

export function RaaSModel() {
  return (
    <section
      id="raas"
      style={{ background: navy, color: "white", padding: "120px 0", borderTop: "1px solid rgba(255,255,255,.06)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            margin: 0,
            fontWeight: 700,
            color: "white",
          }}
        >
          O comparativo.
        </h2>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.65,
            color: "rgba(255,255,255,.78)",
            margin: "28px 0 56px",
            maxWidth: 980,
          }}
        >
          A Revtrue ocupa a cadeira de receita em modelo fracionado. Assinou, começamos a operar. O diagnóstico aconteceu antes, na Sessão de Receita. Instalamos o motion ao lado do time atual, elevamos o executivo interno quando ele existe, e passamos a operação pro VP ou CRO definitivo no momento certo.
        </p>

        <div style={{ background: navySoft, border: "1px solid rgba(255,255,255,.1)", borderRadius: 18, overflow: "hidden" }}>
          {/* header row */}
          <div
            className="raas-table-row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr 1.2fr",
              background: "rgba(0,0,0,.25)",
              borderBottom: "2px solid rgba(255,255,255,.12)",
            }}
          >
            <div
              style={{
                padding: "26px 32px",
                fontSize: 13,
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.65)",
              }}
            >
              Comparativo
            </div>
            <div style={{ padding: "26px 32px", borderLeft: "1px solid rgba(255,255,255,.08)" }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: "white", letterSpacing: "-0.005em", lineHeight: 1.2 }}>
                VP de Vendas
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,.65)",
                  marginTop: 4,
                  letterSpacing: ".01em",
                }}
              >
                Hire full-time
              </div>
            </div>
            <div
              style={{
                padding: "26px 32px",
                borderLeft: `2px solid ${orange}`,
                background: `${orange}22`,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 10, height: 10, borderRadius: 99, background: orange, flexShrink: 0 }} />
                <span style={{ fontSize: 17, fontWeight: 800, color: "white", letterSpacing: "-0.005em", lineHeight: 1.2 }}>
                  Operadores de Receita
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,.65)",
                  letterSpacing: ".01em",
                  paddingLeft: 20,
                }}
              >
                Modelo fracionado
              </div>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.k}
              className="raas-table-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr 1.2fr",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,.06)" : "none",
              }}
            >
              <div
                style={{
                  padding: "28px 32px",
                  fontSize: 13,
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                {row.k}
              </div>
              <div
                style={{
                  padding: "28px 32px",
                  fontSize: 17,
                  color: "rgba(255,255,255,.78)",
                  borderLeft: "1px solid rgba(255,255,255,.06)",
                  lineHeight: 1.5,
                }}
              >
                {row.a}
              </div>
              <div
                style={{
                  padding: "28px 32px",
                  fontSize: 17,
                  color: "white",
                  fontWeight: 600,
                  borderLeft: `2px solid ${orange}`,
                  background: `${orange}10`,
                  lineHeight: 1.5,
                }}
              >
                {row.b}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .raas-table-row { grid-template-columns: 1fr !important; }
          .raas-table-row > div {
            border-left: 0 !important;
            border-top: 1px solid rgba(255,255,255,.06) !important;
            padding: 18px 20px !important;
          }
          .raas-table-row > div:first-child {
            border-top: 0 !important;
            background: rgba(212,90,42,.08) !important;
          }
          #raas { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
