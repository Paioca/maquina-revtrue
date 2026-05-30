/* §06 Como funciona o diagnóstico · fluxograma de 3 etapas reais do método
   (não mais fluxo de entrada). Aplicação sai da lista e vira CTA de entrada.
   Faixa "Sem amarra. Sem pitch." separa fluxograma do CTA. */
import { useState } from "react";
import { Icon } from "../ui";
import { BookingModal } from "../components/BookingModal";

const navy = "#14181F";
const orange = "#D45A2A";

const etapas = [
  {
    n: "01",
    titulo: "MAPEAMENTO MACRO",
    body:
      "Bate-papo inicial com founder ou liderança pra cobrir as etapas macro da operação: time, processo, dados, motion.",
  },
  {
    n: "02",
    titulo: "CONVERSAS COM QUEM OPERA",
    body:
      "Até três conversas adicionais com pessoas-chave do processo (líder comercial, marketing, RevOps). A leitura ganha profundidade vinda de quem vive a operação no dia a dia.",
  },
  {
    n: "03",
    titulo: "DEVOLUTIVA ESCRITA",
    body:
      "Documento escrito com plano priorizado das oportunidades de receita, apresentado em reunião final. Sem proposta de venda anexada.",
  },
];

export function Process() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section
        id="processo"
        style={{ background: navy, color: "white", padding: "120px 0", borderTop: "1px solid rgba(255,255,255,.06)" }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              margin: 0,
              fontWeight: 700,
              maxWidth: 1100,
              color: "white",
            }}
          >
            Como funciona o diagnóstico.
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "rgba(255,255,255,.7)",
              maxWidth: 720,
              marginTop: 28,
              marginBottom: 64,
            }}
          >
            Três etapas. Você sai com o mapa escrito.
          </p>

          {/* Fluxograma · 3 etapas com linha pontilhada vertical conectando */}
          <div className="process-flow" style={{ maxWidth: 880 }}>
            {etapas.map((e, i) => (
              <div
                key={e.n}
                className="process-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "92px 1fr",
                  gap: 32,
                  alignItems: "start",
                }}
              >
                {/* coluna número + conector pontilhado */}
                <div
                  className="process-num-col"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    minHeight: "100%",
                    paddingTop: 6,
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: 64,
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      color: orange,
                      lineHeight: 0.9,
                    }}
                  >
                    {e.n}
                  </span>
                  {i < etapas.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="process-connector"
                      style={{
                        flex: 1,
                        width: 0,
                        borderLeft: `2px dotted rgba(212,90,42,.55)`,
                        marginLeft: 28,
                        marginTop: 14,
                        marginBottom: 6,
                        minHeight: 56,
                      }}
                    />
                  )}
                </div>

                {/* coluna conteúdo */}
                <div
                  className="process-content"
                  style={{
                    paddingTop: 14,
                    paddingBottom: i < etapas.length - 1 ? 48 : 8,
                  }}
                >
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(20px, 2vw, 26px)",
                      fontWeight: 700,
                      letterSpacing: ".02em",
                      textTransform: "uppercase",
                      margin: 0,
                      lineHeight: 1.15,
                      color: "white",
                    }}
                  >
                    {e.titulo}
                  </h3>
                  <p
                    style={{
                      fontSize: 17,
                      color: "rgba(255,255,255,.75)",
                      lineHeight: 1.6,
                      margin: "14px 0 0",
                    }}
                  >
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Faixa de fechamento: Sem amarra. Sem pitch. */}
          <div
            className="process-closing"
            style={{
              maxWidth: 880,
              marginTop: 56,
              padding: "28px 32px",
              background: "rgba(255,255,255,.04)",
              borderLeft: `3px solid ${orange}`,
              borderRadius: "0 12px 12px 0",
            }}
          >
            <p
              className="font-display"
              style={{
                fontSize: "clamp(20px, 2.2vw, 26px)",
                fontWeight: 700,
                letterSpacing: "-0.015em",
                lineHeight: 1.2,
                margin: 0,
                color: orange,
              }}
            >
              Sem amarra. Sem pitch.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                color: "rgba(255,255,255,.8)",
                margin: "10px 0 0",
              }}
            >
              O diagnóstico é seu, mesmo se decidir não seguir junto.
            </p>
          </div>

          {/* CTA + micro-texto */}
          <div
            style={{
              maxWidth: 880,
              marginTop: 40,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              style={{
                background: orange,
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
              Aplicar para uma Sessão de Receita <Icon name="arrow-right" size="md" />
            </button>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "rgba(255,255,255,.65)",
                margin: 0,
                letterSpacing: ".02em",
              }}
            >
              5 min preenchendo · sem custo · sem proposta comercial anexada
            </p>
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />

      <style>{`
        @media (max-width: 768px) {
          .process-row { grid-template-columns: 64px 1fr !important; gap: 20px !important; }
          .process-num-col span:first-child { font-size: 44px !important; }
          .process-connector { margin-left: 20px !important; min-height: 40px !important; }
          .process-content { padding-bottom: 36px !important; }
          .process-closing { padding: 22px 24px !important; }
          #processo { padding: 80px 0 !important; }
        }
      `}</style>
    </>
  );
}
