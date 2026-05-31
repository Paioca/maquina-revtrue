/* EmpresaFechamento — Seção 7 · Stakes + CTA Final
 * StoryBrand: o que o herói perde se não agir + o que ganha se agir
 * $100M Offers: elimina última objeção + torna óbvio dizer sim */
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

            {/* Coluna esquerda: headline de stakes */}
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
                Daqui a seis meses, a sua venda vai estar diferente.
              </h2>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(22px, 2.8vw, 38px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  margin: "24px 0 0",
                  fontWeight: 700,
                  color: navy,
                  fontStyle: "italic",
                }}
              >
                A pergunta é: diferente como?
              </p>
            </div>

            {/* Coluna direita: dois caminhos + CTA */}
            <div>
              {/* Caminho sem ação */}
              <div
                style={{
                  padding: "24px 28px",
                  background: "rgba(20,24,31,.12)",
                  borderRadius: 14,
                  marginBottom: 16,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "rgba(20,24,31,.5)",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    margin: "0 0 12px",
                  }}
                >
                  Sem mudar a estrutura
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(20,24,31,.75)", margin: 0 }}>
                  Novo ciclo de contratação. Mesma frustração. Meta que vira meta do próximo mês. Time que não sabe o que fazer quando o número não aparece.
                </p>
              </div>

              {/* Caminho com ação */}
              <div
                style={{
                  padding: "24px 28px",
                  background: "rgba(20,24,31,.18)",
                  borderRadius: 14,
                  marginBottom: 36,
                  border: "1px solid rgba(20,24,31,.25)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: navy,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    margin: "0 0 12px",
                  }}
                >
                  Com o processo instalado
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: navy, margin: 0, fontWeight: 500 }}>
                  Venda previsível. Time que executa sem depender de improviso. Você sabe onde o negócio está em cada etapa — e o que fazer quando trava.
                </p>
              </div>

              <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(20,24,31,.82)", margin: "0 0 32px" }}>
                O próximo passo custa 5 minutos pra preencher e 45 minutos de conversa. Em troca, você sai sabendo exatamente onde sua operação trava e o que mudar primeiro.
              </p>

              <p
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: navy,
                  margin: "0 0 32px",
                  lineHeight: 1.3,
                }}
              >
                Se não sair da conversa com isso, você não perdeu nada.
              </p>

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
