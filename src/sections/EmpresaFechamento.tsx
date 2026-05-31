/* EmpresaFechamento — Seção 7 · Fechamento
 * Garantia implícita + CTA final */
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

            {/* Coluna esquerda: headline + garantia */}
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(40px, 6vw, 88px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  margin: 0,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Em 45 minutos você sabe onde a sua venda trava.{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: navy,
                    fontWeight: 700,
                  }}
                >
                  Ou a conversa foi de graça de qualquer jeito.
                </em>
              </h2>
            </div>

            {/* Coluna direita: contexto + CTA */}
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(20,24,31,.85)", margin: 0 }}>
                A Revtrue atende um número pequeno de empresas por vez. Não é postura. É porque operar de dentro exige foco, e foco tem limite.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(20,24,31,.85)", margin: "20px 0 0" }}>
                Se você chegou até aqui, já tem a suspeita de que o problema não é o vendedor.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(20,24,31,.85)", margin: "20px 0 0" }}>
                O próximo passo custa 5 minutos do seu tempo pra preencher e 45 minutos de conversa. O que você recebe em troca é saber, com clareza, onde a venda está travando e o que mudar primeiro.
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: navy,
                  margin: "28px 0 40px",
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
