/* §05 Quem Atendemos — texto intro + 2 cards (VC + Bootstrap) */

const navy = "#14181F";
const cream = "#F6F3EE";
const orange = "#D45A2A";

const segments = [
  {
    tag: "Venture Capital",
    title: "VC-backed em fase de escala",
    body:
      "Levantou Seed ou Series A. O fundo precisa ver crescimento replicável antes da próxima rodada. A receita não pode mais vir só do founder, e o time atual precisa virar máquina antes da próxima contratação sênior.",
  },
  {
    tag: "Bootstrap",
    title: "Bootstrap com tração consistente",
    body:
      "Receita anual de sete dígitos crescendo de forma sólida, sem capital de fundo. Time comercial montado ou em formação. O próximo estágio depende de tirar a operação das mãos do founder e criar motion próprio do time.",
  },
];

export function ICP() {
  return (
    <section id="praquem" style={{ background: cream, color: navy, padding: "120px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <div className="rev-icp-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: 0,
              fontWeight: 700,
              color: navy,
            }}
          >
            Quem
            <br />
            <span style={{ color: orange }}>atendemos.</span>
          </h2>
          <div>
            <p
              style={{
                fontSize: 20,
                color: navy,
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 500,
              }}
            >
              A Revtrue ocupa a cadeira de receita de startups tech B2B em fase de escala: SaaS, health-tech, edtech, legaltech, fintech. Trabalhamos próximo de founder, board e investidor, com acesso direto e decisão rápida.
            </p>
          </div>
        </div>

        {/* 2 cards · VC + Bootstrap */}
        <div
          className="rev-icp-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginTop: 80,
          }}
        >
          {segments.map((s) => (
            <article
              key={s.tag}
              style={{
                background: "white",
                borderRadius: 16,
                border: "1px solid rgba(20,24,31,.08)",
                padding: "44px 40px 48px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  background: orange,
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: 4,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {s.tag}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(24px, 2.6vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  margin: 0,
                  color: navy,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(20,24,31,.75)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </article>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .rev-icp-hero { grid-template-columns: 1fr !important; gap: 32px !important; }
          .rev-icp-cards { grid-template-columns: 1fr !important; }
          #praquem { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
