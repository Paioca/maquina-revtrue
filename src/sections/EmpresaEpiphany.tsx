/* EmpresaEpiphany — Seção 2 · Epiphany Bridge
 * DotCom Secrets: a história que instala a crença certa
 * A virada: o sistema faz o vendedor, não o contrário */

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
              O que eu aprendi na prática
            </p>

            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: 0 }}>
              Passei anos operando dentro das estruturas comerciais da Oracle e da RD Station. Empresas que constroem processos de venda com a mesma engenharia que usam pra construir produto.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: "24px 0 0" }}>
              Aprendi uma coisa que nenhum curso de vendas ensina:
            </p>

            {/* Crença instalada */}
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
                  fontSize: "clamp(22px, 2.6vw, 34px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                  color: "white",
                  margin: 0,
                }}
              >
                Um vendedor bom colocado em uma empresa sem processo vira um vendedor mediano em 90 dias.
              </p>
            </div>

            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: 0 }}>
              O processo não é o suporte da venda. O processo <em style={{ color: "white", fontStyle: "normal", fontWeight: 600 }}>é</em> a venda. O vendedor executa o que foi projetado — e quando não existe projeto, cada um improvisa do jeito que sabe.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: "24px 0 0" }}>
              Quando saí das grandes empresas e comecei a trabalhar com negócios menores, vi o mesmo padrão do outro lado: donos com operações boas, times com potencial real — e uma venda que não entregava porque ninguém tinha projetado como ela deveria funcionar.
            </p>
          </div>

          {/* Coluna direita: a virada de crença */}
          <div style={{ paddingTop: 8 }}>
            <div
              style={{
                padding: "36px 32px",
                background: "rgba(255,255,255,.04)",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,.08)",
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "rgba(255,255,255,.4)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                }}
              >
                A crença errada
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: "rgba(255,255,255,.55)",
                  margin: 0,
                  lineHeight: 1.35,
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(255,255,255,.25)",
                }}
              >
                "Se eu contratar o vendedor certo, a meta fecha."
              </p>
            </div>

            <div
              style={{
                padding: "36px 32px",
                background: `${orange}14`,
                borderRadius: 20,
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
                  margin: "0 0 20px",
                }}
              >
                O que é verdade
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: "white",
                  margin: 0,
                  lineHeight: 1.35,
                }}
              >
                "O vendedor certo só performa dentro de um processo certo. Sem o processo, você repete o mesmo ciclo com a próxima pessoa."
              </p>
            </div>

            <div
              style={{
                marginTop: 32,
                padding: "24px 28px",
                background: "rgba(255,255,255,.03)",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: 0 }}>
                Não é culpa sua não saber disso. Ninguém te ensinou a projetar uma operação comercial. Você aprendeu a vender na raça — e isso funcionou até um ponto. O próximo degrau exige estrutura.
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
