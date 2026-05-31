/* EmpresaEpiphany — Seção 2 · Epiphany Bridge
 * História de identificação antes de qualquer argumento */

const navy = "#14181F";
const navySoft = "#1E232C";
const orange = "#D45A2A";

const casos = [
  {
    setor: "Distribuidora",
    desc: "14 vendedores em campo",
  },
  {
    setor: "Escritório de advocacia",
    desc: "5 sócios, sem método de captação",
  },
  {
    setor: "Prestador de serviço",
    desc: "18 anos de mercado, contratos parando de renovar",
  },
];

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
        {/* Quote de abertura */}
        <div
          style={{
            paddingLeft: 28,
            borderLeft: `3px solid ${orange}`,
            marginBottom: 56,
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "clamp(26px, 3.2vw, 42px)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              margin: 0,
              color: "white",
            }}
          >
            "Felipe, eu preciso de um vendedor melhor."
          </p>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,.5)",
              margin: "12px 0 0",
              fontFamily: "var(--font-mono)",
              letterSpacing: ".04em",
            }}
          >
            — frase que eu já ouvi de centenas de donos de empresa
          </p>
        </div>

        <div className="epiphany-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px", alignItems: "start" }}>
          {/* Coluna esquerda: os três casos */}
          <div>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: 0 }}>
              Setores completamente diferentes. Empresas completamente diferentes.
            </p>

            <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
              {casos.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "20px 24px",
                    background: "rgba(255,255,255,.04)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,.07)",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: orange,
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      minWidth: 24,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: "white" }}>{c.setor}</p>
                    <p style={{ margin: "4px 0 0", fontSize: 14, color: "rgba(255,255,255,.55)" }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita: o diagnóstico */}
          <div>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: 0 }}>
              Mas quando eu sentava pra entender a operação, o problema era o mesmo nos três:
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "white",
                margin: "28px 0",
              }}
            >
              Ninguém sabia em que ponto da venda os negócios estavam travando.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,.75)", margin: 0 }}>
              Não tinha etapa definida. Não tinha número que guiasse decisão. A venda dependia do feeling de quem estava na cadeira naquele dia.
            </p>
            <div
              style={{
                marginTop: 36,
                padding: "24px 28px",
                background: `${orange}15`,
                borderRadius: 12,
                border: `1px solid ${orange}40`,
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: orange,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                O dono achava que precisava trocar gente. O que precisava era montar o processo.
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
