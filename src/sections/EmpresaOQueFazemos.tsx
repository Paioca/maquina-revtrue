/* EmpresaOQueFazemos — Seção 5 · O que fazemos
 * Explicação do modelo sem jargão */

const navy = "#14181F";
const navySoft = "#1E232C";
const orange = "#D45A2A";

const nao = [
  "Não terceirizamos sua equipe",
  "Não substituímos seu gerente",
  "Não entregamos um relatório e sumimos",
];

const sim = [
  "Entramos de dentro, ao lado do seu time",
  "Olhamos onde a venda trava e o que o número diz",
  "Trabalhamos até o processo funcionar sem depender de nós",
];

export function EmpresaOQueFazemos() {
  return (
    <section
      id="como-funciona"
      style={{
        background: navySoft,
        color: "white",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 5vw, 76px)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            margin: 0,
            fontWeight: 700,
            color: "white",
            maxWidth: 900,
          }}
        >
          O que a Revtrue faz,<br />
          <span style={{ color: orange }}>em linguagem direta.</span>
        </h2>

        <p style={{ fontSize: 20, lineHeight: 1.6, color: "rgba(255,255,255,.8)", maxWidth: 720, margin: "36px 0 0" }}>
          Nós entramos na sua operação comercial como um sócio de receita temporário. Olhamos pra onde a venda trava, o que o número diz, como o time está sendo gerido e o que precisa mudar primeiro.
        </p>

        <div
          className="oqfazemos-grid"
          style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {/* Coluna NÃO */}
          <div
            style={{
              padding: "36px 32px",
              background: "rgba(255,255,255,.03)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "rgba(255,255,255,.4)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                margin: "0 0 24px",
              }}
            >
              Não fazemos
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {nao.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(255,255,255,.3)", fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>✗</span>
                  <span style={{ fontSize: 17, lineHeight: 1.5, color: "rgba(255,255,255,.6)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna SIM */}
          <div
            style={{
              padding: "36px 32px",
              background: `${orange}10`,
              borderRadius: 16,
              border: `1px solid ${orange}35`,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: orange,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                margin: "0 0 24px",
              }}
            >
              O que fazemos
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {sim.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ color: orange, fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 17, lineHeight: 1.5, color: "rgba(255,255,255,.85)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Frase de fechamento */}
        <div
          style={{
            marginTop: 48,
            maxWidth: 880,
            padding: "28px 32px",
            background: "rgba(255,255,255,.04)",
            borderLeft: `3px solid ${orange}`,
            borderRadius: "0 12px 12px 0",
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "clamp(20px, 2.2vw, 28px)",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.25,
              margin: 0,
              color: "white",
            }}
          >
            O objetivo é simples: fazer sua venda parar de depender de talento individual e começar a depender de{" "}
            <span style={{ color: orange }}>como foi montada.</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .oqfazemos-grid { grid-template-columns: 1fr !important; }
          #como-funciona { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
