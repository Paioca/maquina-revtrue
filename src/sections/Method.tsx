/* Como Operamos · tabela compacta SEM coluna "Time executa"
 * (o que o time executa já fica claro no bloco "O escopo, claro." logo abaixo) */

const navy = "#14181F";
const orange = "#D45A2A";

const frentes = [
  {
    n: "01",
    frente: "Estratégia de Receita e Growth",
    orquestra: "ICP cross-funnel, forecast, priorização",
    resultado: "Clareza do que vira receita primeiro",
  },
  {
    n: "02",
    frente: "Aquisição e Pipeline",
    orquestra: "Split de budget, ICP por canal, outbound",
    resultado: "CAC saudável, canal vencedor identificado",
  },
  {
    n: "03",
    frente: "Operação Comercial e Conversão",
    orquestra: "Funil, calibragem, deals estratégicos",
    resultado: "Mais conversão, ramp mais rápido",
  },
  {
    n: "04",
    frente: "Performance, Dados e Revenue Ops",
    orquestra: "KPIs, dashboards, tracking",
    resultado: "Leitura única, decisão por dado",
  },
  {
    n: "05",
    frente: "Experimentação, Escala e Eficiência",
    orquestra: "Backlog, framework, análise pós-teste",
    resultado: "Canal validado antes de escalar",
  },
];

const naoFazemos = [
  "Operar a mídia paga no lugar do time",
  "Produzir criativos, conteúdo ou cadências de outbound",
  "Tocar o CRM no dia a dia",
  "Trazer parceiros estratégicos ou gerir canais",
  "Construir playbook como entregável-fim",
  "Aparecer na reunião de status e sumir até a próxima",
];

/* Colunas: #/Frente/Orquestra/Resultado (4 cols) */
const GRID = "60px 1.6fr 2.4fr 1.8fr";

export function Method() {
  return (
    <section
      id="metodo"
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
            maxWidth: 1100,
            color: "white",
          }}
        >
          Como operamos.
        </h2>
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.55,
            color: "white",
            maxWidth: 980,
            marginTop: 32,
            marginBottom: 96,
            fontWeight: 500,
          }}
        >
          A Revtrue não substitui o time. Entra dentro e dirige, prioriza, mede, junto com o time, dentro do Slack, do CRM e das reuniões que já existem.
        </p>

        {/* ─── Anatomia ─── */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <span style={{ width: 24, height: 3, background: orange, borderRadius: 2, flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.55)",
              fontWeight: 700,
            }}
          >
            Anatomia
          </span>
        </div>
        <h3
          className="font-display"
          style={{
            fontSize: "clamp(32px, 4vw, 56px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: 0,
            fontWeight: 700,
            color: "white",
            marginBottom: 24,
          }}
        >
          A anatomia do plug-in.
        </h3>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.55,
            color: "rgba(255,255,255,.72)",
            maxWidth: 880,
            marginTop: 0,
            marginBottom: 56,
          }}
        >
          Cinco cadeiras de orquestração que a Revtrue ocupa junto com o time. Cada uma com entregas semanais que pautam a reunião executiva e medem receita.
        </p>

        {/* ─── Tabela compacta 5 linhas · 4 colunas ─── */}
        <div className="rev-frentes-table" style={{ width: "100%" }}>
          {/* Header */}
          <div
            className="rev-frentes-row rev-frentes-header"
            style={{
              display: "grid",
              gridTemplateColumns: GRID,
              gap: 32,
              padding: "16px 0",
              borderBottom: "1px solid rgba(212,90,42,.4)",
              alignItems: "baseline",
            }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: orange }}>#</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: orange }}>Frente</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: orange }}>Revtrue orquestra</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: orange }}>→ Resultado</div>
          </div>

          {/* Rows */}
          {frentes.map((f) => (
            <div
              key={f.n}
              className="rev-frentes-row"
              style={{
                display: "grid",
                gridTemplateColumns: GRID,
                gap: 32,
                padding: "28px 0",
                borderBottom: "1px solid rgba(255,255,255,.08)",
                alignItems: "start",
              }}
            >
              <div className="font-display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: orange, lineHeight: 1 }}>
                {f.n}
              </div>
              <div>
                <div className="rev-cell-label" style={{ display: "none" }}>Frente</div>
                <div className="font-display" style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", color: "white", lineHeight: 1.3 }}>
                  {f.frente}
                </div>
              </div>
              <div>
                <div className="rev-cell-label" style={{ display: "none" }}>Revtrue orquestra</div>
                <div style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,.85)" }}>
                  {f.orquestra}
                </div>
              </div>
              <div>
                <div className="rev-cell-label" style={{ display: "none" }}>→ Resultado</div>
                <div style={{ fontSize: 15, lineHeight: 1.55, color: "white", fontStyle: "italic", fontWeight: 500 }}>
                  {f.resultado}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Bloco "O escopo, claro." · enxuto, sem card ─── */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,.08)" }}>
          <h4
            className="font-display"
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              margin: 0,
              fontWeight: 700,
              color: "white",
              marginBottom: 12,
            }}
          >
            O escopo, claro.
          </h4>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.55,
              color: "rgba(255,255,255,.7)",
              maxWidth: 760,
              margin: "0 0 20px",
            }}
          >
            Hands on pra Revtrue é estar dentro da rotina pra orquestrar, não fazer no lugar do time. Dirigimos, priorizamos e medimos, dentro do Slack e nas reuniões que já existem.
          </p>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "rgba(212,90,42,.8)",
              marginBottom: 10,
            }}
          >
            O que NÃO fazemos
          </div>
          <ul
            className="rev-nao-fazemos"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6px 32px",
            }}
          >
            {naoFazemos.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,.7)",
                }}
              >
                <span aria-hidden="true" style={{ color: orange, fontWeight: 700, fontSize: 12, flexShrink: 0, opacity: 0.7 }}>
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .rev-frentes-row { grid-template-columns: 40px 1fr !important; gap: 14px !important; row-gap: 4px !important; }
          .rev-frentes-row > div:not(:first-child) { grid-column: 2 !important; }
          .rev-frentes-row > div:first-child { grid-row: 1 / span 3; }
          .rev-frentes-header { display: none !important; }
          .rev-cell-label { display: block !important; font-family: var(--font-mono); font-size: 10px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: rgba(212,90,42,.7); margin-bottom: 4px; }
          .rev-nao-fazemos { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
