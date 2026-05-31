/* EmpresaProblema — O Vilão Real
 * Ângulo: os furos reais que impedem a conversão
 * Oferta mal construída, jornada que vaza, mix sem definição, comunicação que não convence */

const navy = "#14181F";
const orange = "#D45A2A";

const furos = [
  {
    n: "01",
    titulo: "Oferta que não justifica o sim",
    desc: "O produto é bom. Mas quando você apresenta, o cliente não entende por que é a escolha certa pra ele agora. A oferta precisa ser construída — não só descrita.",
  },
  {
    n: "02",
    titulo: "Jornada com buracos",
    desc: "Tem interesse no começo, tem proposta no final. O meio está vazio. Sem critérios de avanço, cada conversa recomeça do zero — e o cliente esfria antes de fechar.",
  },
  {
    n: "03",
    titulo: "Posicionamento que não separa",
    desc: "Você compete por preço porque não ficou claro por que você é a escolha certa. Posicionamento fraco transforma valor real em commodity.",
  },
  {
    n: "04",
    titulo: "Mix de produto sem clareza",
    desc: "Você vende o que o cliente pede, não o que a operação deveria oferecer. Sem definição de mix, cada venda é uma negociação do zero.",
  },
  {
    n: "05",
    titulo: "Comunicação que não converte",
    desc: "O que você diz e como você diz não está alinhado com quem está na frente de você. A linguagem certa vende. A linguagem errada gera dúvida — e dúvida não fecha.",
  },
  {
    n: "06",
    titulo: "Ferramental que não sustenta",
    desc: "CRM, proposta, follow-up — cada peça foi montada de forma independente. O resultado é uma operação que depende da memória de quem está vendendo.",
  },
];

export function EmpresaProblema() {
  return (
    <section
      id="problema"
      style={{
        background: navy,
        color: "white",
        padding: "120px 0",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>

        {/* Headline */}
        <div style={{ maxWidth: 860, marginBottom: 64 }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(38px, 5.5vw, 86px)",
              lineHeight: 0.97,
              letterSpacing: "-0.04em",
              margin: 0,
              fontWeight: 700,
              color: "white",
            }}
          >
            O problema não é<br />
            o quanto você vende.<br />
            <span style={{ color: orange }}>É o que impede<br />de vender mais.</span>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: "32px 0 0", maxWidth: 680 }}>
            Você está pesquisando, tentando, aplicando. Mas ninguém ainda sentou com você pra apontar onde a sua operação comercial tem furo — e o que tapar primeiro.
          </p>
        </div>

        {/* Grid de furos */}
        <div
          className="furos-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {furos.map((f) => (
            <div
              key={f.n}
              style={{
                padding: "28px 26px",
                background: "rgba(255,255,255,.03)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: orange,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                {f.n}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  margin: "0 0 12px",
                  color: "white",
                  lineHeight: 1.25,
                }}
              >
                {f.titulo}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,.65)", margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Frase de identificação emocional */}
        <div
          style={{
            marginTop: 48,
            maxWidth: 900,
            padding: "32px 36px",
            background: `${orange}10`,
            borderRadius: 16,
            border: `1px solid ${orange}30`,
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "clamp(20px, 2.4vw, 30px)",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              color: "white",
              margin: 0,
            }}
          >
            Você não está ficando pra trás porque trabalha menos ou tem produto pior.{" "}
            <span style={{ color: orange }}>Está porque ninguém ainda montou a estrutura que transforma interesse em receita.</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .furos-grid { grid-template-columns: 1fr !important; }
          #problema { padding: 80px 0 !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .furos-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
