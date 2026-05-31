/* EmpresaFechamento — Stakes + CTA Final
 * Ângulo: a sensação de que os outros estão conseguindo menos você
 * StoryBrand: o que muda quando você tem estrutura */
import { useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "../components/BookingModal";

const orange = "#D45A2A";
const navy = "#14181F";

export function EmpresaFechamento() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="cta" style={{ background: orange, color: navy, padding: "120px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="fechamento-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px", alignItems: "center" }}>

            {/* Coluna esquerda */}
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(38px, 5.5vw, 80px)",
                  lineHeight: 0.97,
                  letterSpacing: "-0.038em",
                  margin: 0,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Você não está ficando pra trás por falta de esforço.
              </h2>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(22px, 2.8vw, 36px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  margin: "24px 0 0",
                  fontWeight: 700,
                  color: navy,
                  fontStyle: "italic",
                }}
              >
                Está faltando alguém sentar com você e montar o que está faltando.
              </p>
            </div>

            {/* Coluna direita */}
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(20,24,31,.82)", margin: "0 0 20px" }}>
                Você está pesquisando. Consumindo conteúdo. Tentando aplicar. E mesmo assim a conversão não sobe, o faturamento não cresce, e a sensação de que os outros estão conseguindo não passa.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(20,24,31,.82)", margin: "0 0 32px" }}>
                O que falta não é mais informação. É um diagnóstico honesto de onde a sua operação comercial tem furo — e um caminho claro do que montar primeiro.
              </p>

              <div
                style={{
                  padding: "22px 26px",
                  background: "rgba(20,24,31,.1)",
                  borderRadius: 14,
                  marginBottom: 32,
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(17px, 1.8vw, 22px)",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: navy,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Em 45 minutos você entende por que não está fechando — e o que montar pra isso mudar. Se não sair da conversa com isso, você não perdeu nada.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                style={{
                  background: navy,
                  color: "white",
                  border: 0,
                  padding: "20px 32px",
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                Agendar conversa com o Felipe <Icon name="arrow-right" size="md" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={open} onOpenChange={setOpen} />

      <style>{`
        @media (max-width: 900px) {
          .fechamento-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #cta { padding: 80px 24px !important; }
        }
      `}</style>
    </>
  );
}
